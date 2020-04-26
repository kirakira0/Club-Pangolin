import { createSlice } from '@reduxjs/toolkit'
export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        //player stuff
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
        birdY: 80,
        birdCollision: false,
        birdCollisionAllowed: true,
        enemySpeed: 5,
    },
    reducers: {
        jump: state => {
            state.height = '80px'
            state.position = 10
            //isn't changing state, but rather making a new instance with the new state
            if(state.numberOfJumps === 1) {
                state.numberOfJumps = 0
                //state.gravity = state.jumpGravity
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
            if(state.grassCollision == false && state.grassCollisionAllowed == true) {
                if (state.grassX - 50 <= 50 && state.position - 10 <= 60) {
                    console.log("grasscollision")
                    state.grassCollision = true
                    state.grassCollisionAllowed = false
                }
            }
            if(state.birdCollision == false && state.birdCollisionAllowed == true) {
                if(state.birdX - 50 <= 50 && state.position - state.birdY >= 0) {
                    console.log("bird collision")
                    state.birdCollision = true
                    state.birdCollisionAllowed = false
                }
            }
            if (state.grassCollision == true || state.birdCollision == true) {
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
            state.birdCollision = false
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
                state.grassCollision = false
                state.birdCollision = false
            }
        },
        gameTick: state => {
            //some gravity
            if (state.status === "playing") {
                if(state.grassX < 0) {
                    state.grassX = 1000
                    state.grassCollisionAllowed = true
                }
                if(state.birdX < 0 && state.grassX < 600) {
                    state.birdX = 1000
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
        },
        incrementSpeed: (state, frame) => {
            if(frame.payload % 300 === 0 && frame.payload < 3000) {
                console.log("this incremented")
                state.enemySpeed += 1.5
                state.jumpGravity += 0.5
                state.gravity += .1
            }
        }
    }
})

export const { jump, crouch, uncrouch, checkCollision, gameStart, gameOver, gameTick, incrementSpeed } = gameSlice.actions;

//selectors
export const selectPosition = state => state.game.position
export const selectHealth = state => state.game.health
export const selectGrassCollision = state => state.game.grassCollision
export const selectBirdCollision = state => state.game.birdCollision
export const selectStatus = state => state.game.status
export const selectgrassX = state => state.game.grassX
export const selectScore = state => state.game.score

export default gameSlice.reducer