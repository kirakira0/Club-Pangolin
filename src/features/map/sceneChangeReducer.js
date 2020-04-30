
const initialState = { value: 0 }

const sceneChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_SCENE":
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default sceneChangeReducer