import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Player from '../player/Player'
import Grass from '../obstacles/Grass'
import Bird from '../obstacles/Bird'
import {
    jump,
    crouch,
    uncrouch,
    checkCollision,
    gameStart,
    gameOver,
    gameTick,
    selectPosition,
    selectHealth,
    selectStatus,
    incrementSpeed,
    selectScore,
} from './gameSlice'

const StartGame = () => {
    const dispatch = useDispatch()
    return (
        <div className="opening-menu">
            <h3>Welcome to game</h3>
            <button className="button" onClick={() => dispatch(gameStart())}>
                Start
            </button>
        </div>
    )
}

const useKeyPress = () => {
    const dispatch = useDispatch()
    const handleKeyPress = React.useCallback((e) => {
        e.preventDefault()
        switch(e.keyCode) {
            case 38:
                dispatch(jump())
                break;
            case 40:
                dispatch(crouch())
                break;
            default:
                console.log(e.keyCode)
        }
    }, [dispatch])
    const handleKeyUp = React.useCallback((e) => {
        e.preventDefault()
        switch(e.keyCode) {
            case 40:
                dispatch(uncrouch())
                break
            default:
                
        }
    }, [dispatch])
    
    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        document.addEventListener("keyup", handleKeyUp)
        return () => {
            document.removeEventListener("keydown", handleKeyPress)
            document.removeEventListener("keyup", handleKeyUp)
        }
    }, [handleKeyPress, handleKeyUp, dispatch])

}

function Game() {
    const dispatch = useDispatch()
    useKeyPress()
    const status = useSelector(selectStatus)
    const health = useSelector(selectHealth)
    const score = useSelector(selectScore)
    let frame = 0
    React.useEffect(() => {
        let timer
        if(status === "playing") {
            timer = setInterval(() => {
                dispatch(gameTick())
                dispatch(checkCollision())
                frame += 1
                dispatch(incrementSpeed(frame))
                dispatch(gameOver())
            }, 16.67)
            console.log("Game has started")
        }
    }, [status, dispatch])
    return(
        <>  
            <div style={{
                color: 'white'
            }}>
                Health: {health} Score: {score} 
                <Player />
                <Grass />
                <Bird />
            </div>
            {(status === "new" || status === "over") && <StartGame />}
        </>
        
    )
}

export default Game