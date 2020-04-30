import { createSlice } from '@reduxjs/toolkit'
import { grabRandomColumn } from '../../utils'

export const eaterGameSlice = createSlice({
    name: "game",
    initialState: {
        eatStatus: "new",
        eatScore: 0,
        playerPosition: [ 360, 0 ],
        antPosition: [grabRandomColumn(), 800],
        termitePosition: [grabRandomColumn(), 900],
        rockPosition: [grabRandomColumn(), 1000],
        foodSpeed: 2,
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
                state.antPosition[1] = 800
                state.antPosition[0] = grabRandomColumn()
                state.eatScore += 1
            }
            if((state.termitePosition[0] - state.playerPosition[0] === 20) && state.termitePosition[1] < 80) {
                state.termitePosition[1] = 800
                state.termitePosition[0] = grabRandomColumn()
                state.eatScore += 1    
            }
        },
        gameTick: state => {
            if (state.antPosition[1] <= 50) {
                state.antPosition[1] = 800
                state.antPosition[0] = grabRandomColumn()
            }
            if (state.termitePosition[1] <= 50 && state.antPosition[1] < 650) {
                state.termitePosition[1] = 800
                state.termitePosition[0] = grabRandomColumn()
            }
            if (state.rockPosition[1] <= 50 && state.termitePosition[1] < 650) {
                state.rockPosition[1] = 800
                state.rockPosition[0] = grabRandomColumn()
            }
            state.antPosition[1] -= state.foodSpeed
            state.termitePosition[1] -= state.foodSpeed
            state.rockPosition[1] -= state.foodSpeed
        },
        gameStart: state => {
            state.eatStatus = "playing"
        }
    }
})

export const { moveRight, moveLeft, collisionCheck, gameTick, gameStart } = eaterGameSlice.actions

//selectors
export const selectStatus = state => state.eaterGame.eatStatus
export const selectScore = state => state.eaterGame.eatScore

export default eaterGameSlice.reducer