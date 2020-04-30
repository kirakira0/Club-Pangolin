
//tutorials used: https://www.youtube.com/watch?v=DyWUW7Px1MQ
//https://www.youtube.com/watch?v=QZcNGfcn-oo&t=1089s
//https://www.youtube.com/watch?v=J6Xs3eGTfTQ

import { createStore, combineReducers } from "redux"
import playerReducer from '../features/player/reducer'
import sceneChangeReducer from '../features/map/sceneChangeReducer'
import chestReducer from '../features/map/chestReducer'
import gameReducer from '../minigame1/features/game/gameSlice'
import eaterGameReducer from '../minigame2/features/game/eaterGameSlice'

const rootReducer = combineReducers({
    player: playerReducer,
    game: gameReducer,
    eaterGame: eaterGameReducer,
    SceneChange: sceneChangeReducer,
    chest: chestReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
