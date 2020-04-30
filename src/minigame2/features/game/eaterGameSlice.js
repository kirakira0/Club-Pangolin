import { createSlice } from '@reduxjs/toolkit'
import { grabRandomColumn, grabRandomHeight } from '../../utils'

export const eaterGameSlice = createSlice({
    name: "game",
    initialState: {
        eatStatus: "new",
        eatScore: 0,
        playerPosition: [ 360, 0 ],
        antPosition: [grabRandomColumn(), 800],
        termitePosition: [grabRandomColumn(), 900],
        rockPosition: [grabRandomColumn(), 1000],
        foodSpeed: 5,
        eatFrame: 0,
    },
    reducers: {
        moveRight: state => {
            if(state.playerPosition[0] === 640) {
                console.log("can't move that way")
            }else {
                state.playerPosition[0] += 280
            }
        },
        moveLeft: state => {
            if(state.playerPosition[0] === 80) {
                console.log("can't move that way")
            }
            else {
                state.playerPosition[0] -= 280
            }

        },
        collisionCheck: state => {
            if((state.antPosition[0] - state.playerPosition[0] === 20) && state.antPosition[1] < 80) {
                state.antPosition[1] = grabRandomHeight()
                state.antPosition[0] = grabRandomColumn()
                console.log("ant collision")
                state.eatScore += 1
            }
            if((state.termitePosition[0] - state.playerPosition[0] === 20) && state.termitePosition[1] < 80) {
                state.termitePosition[1] = grabRandomHeight()
                state.termitePosition[0] = grabRandomColumn()
                console.log("termite collision")
                state.eatScore += 1    
            }
            if((state.rockPosition[0] - state.playerPosition[0] === 20) && state.rockPosition[1] < 80) {
                if(state.eatScore > 0) {
                    console.log("rock collision")
                    state.rockPosition[1] = grabRandomHeight()
                    state.rockPosition[0] = grabRandomColumn()
                    state.eatScore -= 1  
                }
            }
        },
        gameTick: state => {
            if (state.antPosition[1] <= 50) {
                state.antPosition[1] = grabRandomHeight()
                state.antPosition[0] = grabRandomColumn()
            }
            if (state.termitePosition[1] <= 50 && state.antPosition[1] < 650) {
                state.termitePosition[1] = grabRandomHeight()
                state.termitePosition[0] = grabRandomColumn()
            }
            if (state.rockPosition[1] <= 50 && state.termitePosition[1] < 650) {
                state.rockPosition[1] = grabRandomHeight()
                state.rockPosition[0] = grabRandomColumn()
            }
            state.antPosition[1] -= state.foodSpeed
            state.termitePosition[1] -= state.foodSpeed
            state.rockPosition[1] -= state.foodSpeed
        },
        gameStart: state => {
            state.eatStatus = "playing"
        },incrementSpeed: state => {
            state.eatFrame += 1
            if(state.eatFrame % 300 === 0 && state.eatFrame < 2500) {
                console.log("this incremented")
                state.foodSpeed += 1.5
            }
        },
    }
})

export const { moveRight, moveLeft, collisionCheck, gameTick, gameStart, incrementSpeed } = eaterGameSlice.actions

//selectors
export const selectStatus = state => state.eaterGame.eatStatus
export const selectScore = state => state.eaterGame.eatScore

export default eaterGameSlice.reducer