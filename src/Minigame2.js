import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Player from './minigame2/features/player/Player'
import Ant from './minigame2/features/food/ant/Ant'
import Termite from './minigame2/features/food/termite/Termite'
import Rock from './minigame2/features/food/rock/Rock'
import {
    moveRight,
    moveLeft,
    collisionCheck,
    gameTick,
    selectScore,
    selectStatus,
    gameStart,
    incrementSpeed,
} from './minigame2/features/game/eaterGameSlice'

const EatStartGame = () => {
    const dispatch = useDispatch()
    return(
        <div className="eaterGameStart">
            <button className="eatGameButton" onClick={() => dispatch(gameStart())}>
                Start Game
            </button>
        </div>
    )
}

const useKeyPress = () => {
    const dispatch = useDispatch()

    const handleKeyPress = React.useCallback((e) => {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
                dispatch(moveLeft())
                break
                
            case 39:
                dispatch(moveRight())
                break
            default:
                console.log(e.keyCode)
                
        }
    }, [dispatch])

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [handleKeyPress, dispatch])
}

function Minigame2() {
    const dispatch = useDispatch()
    useKeyPress()
    const [ eatGameStatus, setStatus] = useState("playing")
    const score = useSelector(selectScore)
    const status = useSelector(selectStatus)

    React.useEffect(() => {
        let eatTimer
        if (eatGameStatus === "playing") {
            eatTimer = setInterval(() => {
                dispatch(gameTick())
                dispatch(collisionCheck())
                dispatch(incrementSpeed())
            }, 16.67)
        } else {
            setStatus("over")
            clearInterval(eatTimer)
        }
    }, [eatGameStatus])
    return(
        <>
            <div
                style={{
                    position: 'relative',
                    color: 'white',
                    backgroundColor: 'red',
                    width: '800px',
                    height: '800px',
                    margin: '20px auto'
                }}
            >
                <hr
                style = {{
                    position: 'absolute',
                    color: '#000000',
                    backgroundColor: '#000000',
                    bottom: '80px',
                    height: 3,
                    width: 800,
                    borderColor: '#000000'
                }}
            />
            <hr
                style = {{
                    position: 'absolute',
                    color: '#000000',
                    backgroundColor: '#000000',
                    top: '60px',
                    left: '250px',
                    height: 733,
                    width: 5,
                    borderColor: '#000000'
                }}
            />
            <hr
                style = {{
                    position: 'absolute',
                    color: '#000000',
                    backgroundColor: '#000000',
                    top: '60px',
                    right: '250px',
                    height: 733,
                    width: 5,
                    borderColor: '#000000'
                }}
            />  
                Score: {score}
                <Ant />
                <Termite />
                <Rock />
                <Player />
            </div>
            {(status === "new" || status === "over") && <EatStartGame />}
        </>
        
    )
}

export default Minigame2