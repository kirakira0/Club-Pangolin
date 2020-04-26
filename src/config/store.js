import { createStore, combineReducers } from "redux"
import playerReducer from '../features/player/reducer'
import gameReducer from '../minigame1/features/game/gameSlice'
const rootReducer = combineReducers({
    player: playerReducer,
    game: gameReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
