const initialState = { value: 0 }

const chestReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_CHEST":
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default chestReducer