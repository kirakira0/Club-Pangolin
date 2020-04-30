import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Player from './minigame1/features/player/Player'
import Grass from './minigame1/features/obstacles/Grass'
import Bird from './minigame1/features/obstacles/Bird'
import App from './App';
import Game from './Game'; 
import {Route, Link} from 'react-router-dom'; 
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
} from './minigame1/features/game/gameSlice'

const StartGame = () => {
    const dispatch = useDispatch()
    return (
        <div className="opening-menu">
            <h3 style={{color: 'red'}}>Welcome to game</h3>
            <button 
                className="button" 
                onClick={() => dispatch(gameStart())}
                style={{
                    position: 'absolute',
                    bottom: '-40px',
                    left: '370px'
                }}
            >
                Start
            </button>
        </div>
    )
}

const useKeyPress = () => {
    const dispatch = useDispatch()
    //keydown
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
    //keyup
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

function Minigame1() {
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
                //console.log(frame)
                dispatch(incrementSpeed(frame))
                dispatch(gameOver())
            }, 16.67)
            console.log("Game has started")
        }
    }, [status, dispatch])
    return(
        <>  
            <div style={{
                color: 'white',
                backgroundColor: 'purple',
                borderColor: 'white',
                border: '5px',
                position: 'relative',
                height: '300px',
                width: '800px',

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

export default Minigame1; 