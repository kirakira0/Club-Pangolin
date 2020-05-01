import { createSlice } from '@reduxjs/toolkit'
import { grabRandomColumn, grabRandomHeight } from '../../utils'

export const eaterGameSlice = createSlice({
    name: "game",
    initialState: {
        eatStatus: "new",
        eatScore: 0,
        playerPosition: [ 260, 0 ],
        antPosition: [grabRandomColumn(), 600],
        termitePosition: [grabRandomColumn(), 800],
        rockPosition: [grabRandomColumn(), 1000],
        foodSpeed: 5,
        eatFrame: 0,
        timeRemaining: 30,
    },
    reducers: {
        moveRight: state => {
            if(state.playerPosition[0] === 460) {

            }else {
                state.playerPosition[0] += 200
            }
        },
        moveLeft: state => {
            if(state.playerPosition[0] === 60) {
            }
            else {
                state.playerPosition[0] -= 200
            }

        },
        collisionCheck: state => {
            if((state.antPosition[0] - state.playerPosition[0] === 20) && state.antPosition[1] < 80) {
                state.antPosition[1] = grabRandomHeight()
                state.antPosition[0] = grabRandomColumn()
                state.eatScore += 1
            }
            if((state.termitePosition[0] - state.playerPosition[0] === 20) && state.termitePosition[1] < 80) {
                state.termitePosition[1] = grabRandomHeight()
                state.termitePosition[0] = grabRandomColumn()
                state.eatScore += 1    
            }
            if((state.rockPosition[0] - state.playerPosition[0] === 20) && state.rockPosition[1] < 80) {
                if(state.eatScore > 0) {
                    state.rockPosition[1] = grabRandomHeight()
                    state.rockPosition[0] = grabRandomColumn()
                    state.eatScore -= 1  
                }
            }
        },
        gameTick2: state => {
            if(state.eatStatus === "playing") {
                if (state.antPosition[1] <= 50 && state.termitePosition[1] < 650 && state.rockPosition[1] < 650) {
                    state.antPosition[1] = grabRandomHeight()
                    state.antPosition[0] = grabRandomColumn()
                }
                if (state.termitePosition[1] <= 50 && state.antPosition[1] < 650 && state.rockPosition[1] < 650) {
                    state.termitePosition[1] = grabRandomHeight()
                    state.termitePosition[0] = grabRandomColumn()
                }
                if (state.rockPosition[1] <= 50 && state.termitePosition[1] < 650 && state.rockPosition[1] < 650) {
                    state.rockPosition[1] = grabRandomHeight()
                    state.rockPosition[0] = grabRandomColumn()
                }
                state.antPosition[1] -= state.foodSpeed
                state.termitePosition[1] -= state.foodSpeed
                state.rockPosition[1] -= state.foodSpeed
            }
        },
        gameStart2: state => {
            state.eatStatus = "playing"
            state.eatScore = 0
            state.timeRemaining = 30
            state.foodSpeed = 5
        },
        incrementSpeed: state => {
            if(state.eatStatus === "playing") {
                state.eatFrame += 1
                if(state.eatFrame % 60 === 0) {
                    if(state.timeRemaining > 0){
                        state.timeRemaining-=1
                    }
                }
                
                if(state.timeRemaining === 0) {
                    state.eatStatus = "over"
                    state.foodSpeed = 0
                }
                
                if(state.eatFrame % 300 === 0 && state.eatFrame < 2500) {
                    state.foodSpeed += 1.5
                }
            }
            
        },
        resetGame: state => {
            if(state.timeRemaining === 0) {
                state.eatStatus = "over"
                state.playerPosition = [ 260, 0 ]
                state.antPosition = [grabRandomColumn(), 600]
                state.termitePosition = [grabRandomColumn(), 800]
                state.rockPosition = [grabRandomColumn(), 1000]
                state.foodSpeed = 5
                state.eatFrame = 0
            }
        }
    }
})

export const { moveRight, moveLeft, collisionCheck, gameTick2, gameStart2, incrementSpeed, resetGame } = eaterGameSlice.actions

//selectors
export const selectStatus = state => state.eaterGame.eatStatus
export const selectScore = state => state.eaterGame.eatScore
export const selectTime = state => state.eaterGame.timeRemaining

export default eaterGameSlice.reducer