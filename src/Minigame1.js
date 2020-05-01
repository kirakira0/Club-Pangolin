import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Player from './minigame1/features/player/Player'
import Grass from './minigame1/features/obstacles/Grass'
import Bird from './minigame1/features/obstacles/Bird'
import {
    jump,
    crouch,
    uncrouch,
    checkCollision,
    gameStart,
    gameOver,
    gameTick,
    resetSpeed,
    selectHealth,
    selectStatus,
    incrementSpeed,
    selectScore,
} from './minigame1/features/game/gameSlice'


const StartGame = () => {
    const dispatch = useDispatch()
    return (
        <div className="opening-menu">
            <button 
                className="button" 
                onClick={() => dispatch(gameStart())}
                style={{
                    position: 'relative',
                    left: '45%'
                }}
            >
                Start Game
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
    const [ componentStatus, setStatus] = useState("playing")
    const status = useSelector(selectStatus)
    const health = useSelector(selectHealth)
    const score = useSelector(selectScore)
    React.useEffect(() => {
        let timer
            if(componentStatus === "playing") {
                timer = setInterval(() => {
                    dispatch(gameTick())
                    dispatch(checkCollision())
                    dispatch(incrementSpeed())
                    dispatch(gameOver())
                }, 16.67)
            } else {
                setStatus("over")
                clearInterval(timer)
                dispatch(resetSpeed())
            }
    }, [componentStatus])
    return(
        <>  
            <div style={{
                position: 'absolute',
                left: '25%',
                top: '50%',
            }}>
                <p>Return <Link to='/'>Home</Link></p>
                Instructions:
                <h2 style={{
                    fontSize: '90%',
                    
                    
                }}>
                    To jump over the grass press the up arrow.
                    To crouch under the birds press the down arrow.
                    Last as long as you can!
                </h2>
            </div>
            {(status === "new" || status === "over") && <StartGame />}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                position: 'relative',
                borderColor: 'white',
                border: '5px',
                //position: 'relative',
                height: '300px',
                width: '100%',

            }}>
                <h1
                    style={{
                        left: '45%',
                        top: '100%'
                    }}
                >
                    Health: {health} Score: {score}
                </h1>
                <Player />
                <Grass />
                <Bird />
            </div>
            
        </>
        
    )
}

export default Minigame1; 