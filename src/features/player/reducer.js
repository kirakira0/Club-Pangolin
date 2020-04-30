//tutorials used: https://www.youtube.com/watch?v=DyWUW7Px1MQ
//https://www.youtube.com/watch?v=QZcNGfcn-oo&t=1089s
//https://www.youtube.com/watch?v=J6Xs3eGTfTQ


const initialState = {
    position: [0,0],
}
const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVE_PLAYER":
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default playerReducer
