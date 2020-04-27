import { createSlice } from '@reduxjs/toolkit'

export const eaterGameSlice = createSlice({
    name: "game",
    initialState: {
        state: "new",
        score: 0,
        playerPosition: [ 360, 0 ],
        antPosition: [375, 800]
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
            console.log("collisionCheck")
        },
        gameTick: state => {
            if (state.antPosition[1] <= 50) {
                state.antPosition[1] = 800
            }
            state.antPosition[1] -= 2
        },
        gameStart: state => {
            state.status = "playing"
        }
    }
})

export const { moveRight, moveLeft, collisionCheck, gameTick, gameStart } = eaterGameSlice.actions

//selectors
export const selectStatus = state => state.eaterGame.status
export const selectScore = state => state.eaterGame.score

export default eaterGameSlice.reducer