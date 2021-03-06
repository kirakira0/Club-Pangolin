import { createSlice } from '@reduxjs/toolkit'
import { grabRandomX } from '../../utils'

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        //player stuff
        frame: 0,
        position: 0,
        height: '80px',
        health: 3,
        score: 0,
        numberOfJumps: 1,
        status: "new",
        gravity: 0.5,
        jumpGravity: 11.5,
        gravitySpeed: 0,
        //enemy stuff
        grassX: 1000,
        grassCollision: false,
        grassCollisionAllowed: true,
        birdX: 1200,
        birdY: 60,
        birdCollision: false,
        birdCollisionAllowed: true,
        enemySpeed: 5,
    },
    reducers: {
        jump: state => {
            state.height = '80px'
            state.position = 10
            if(state.numberOfJumps === 1) {
                state.numberOfJumps = 0
                state.gravitySpeed = 0
                state.gravitySpeed += state.jumpGravity
                state.position += state.gravitySpeed
            }
            
        },
        crouch: state => {
            state.height = '40px'
        },
        uncrouch: state => {
            state.height = '80px'
        },
        checkCollision: state => {
            if(state.grassCollision === false && state.grassCollisionAllowed === true) {
                if ((state.grassX - 50 <= 30 && state.grassX - 50 >= -10) && state.position - 10 <= 40) {
                    state.grassCollision = true
                    state.grassCollisionAllowed = false
                }
            }
            if(state.birdCollision === false && state.birdCollisionAllowed === true) {
                if((state.birdX - 50 <= 50 && state.birdX - 50 >= -10) && (state.position - state.birdY >= 0 || (state.height === "80px" && state.position<60))) {
                    state.birdCollision = true
                    state.birdCollisionAllowed = false
                }
            }
            if (state.grassCollision === true || state.birdCollision === true) {
                if(state.health > 0) {
                    state.health -= 1
                    state.grassCollision = false
                    state.birdCollision = false
                }
            }
        },
        gameStart: state => {
            state.status = "playing"
            state.birdX = 1200
            state.grassX = 1000
            state.jumpGravity = 11.5
            state.gravity = 0.5
            state.gravitySpeed = 0
            state.health = 3
            state.score = 0
            state.enemySpeed = 5
            state.grassCollision = false
            state.grassCollisionAllowed = true
            state.birdCollision = false
            state.birdCollisionAllowed = true
        },
        gameOver: state => {
            if(state.health <= 0){
                state.status = "over"
                state.birdX = 1200
                state.grassX = 1000
                state.jumpGravity = 11.5
                state.gravity = 0.5
                state.gravitySpeed = 0
                state.health = 3
                state.score = 0
                state.enemySpeed = 5
                state.frame = 0
                state.grassCollision = false
                state.birdCollision = false
            }
        },
        gameTick: state => {
            //some gravity
            if (state.status === "playing") {
                if(state.grassX < 0 && state.birdX < 600) {
                    state.grassX = grabRandomX()
                    state.grassCollisionAllowed = true
                }
                if(state.birdX < 0 && state.grassX < 600) {
                    state.birdX = grabRandomX()
                    state.birdCollisionAllowed = true
                }
                state.grassX -= state.enemySpeed
                state.birdX -= state.enemySpeed
                state.score += 1
                if(state.position <= 0) {
                    state.numberOfJumps = 1
                }
                if(state.position>0) {
                    state.gravitySpeed -= state.gravity
                    state.position += state.gravitySpeed
                }
            }
        },resetSpeed: state => {
                    state.enemySpeed = 5
                    state.jumpGravity = 11.5
                    state.gravity = 0.5
        },
        incrementSpeed: state => {
            if(state.status === "playing") {
                state.frame += 1
                if(state.frame % 300 === 0 && state.frame < 3000) {
                    state.enemySpeed += 1.5
                    state.jumpGravity += 0.5
                    state.gravity += .1
                }
            }
        }
    }
})

export const { jump, crouch, uncrouch, checkCollision, gameStart, gameOver, gameTick, incrementSpeed, setGameInterval, resetSpeed } = gameSlice.actions;

//selectors
export const selectPosition = state => state.game.position
export const selectHealth = state => state.game.health
export const selectGrassCollision = state => state.game.grassCollision
export const selectBirdCollision = state => state.game.birdCollision
export const selectStatus = state => state.game.status
export const selectgrassX = state => state.game.grassX
export const selectScore = state => state.game.score

export default gameSlice.reducer