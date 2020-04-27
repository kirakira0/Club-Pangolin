import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Player from '../player/Player'
import Ant from '../food/ant/Ant'
import {
    moveRight,
    moveLeft,
    collisionCheck,
    gameTick,
    selectScore,
    selectStatus,
    gameStart
} from './eaterGameSlice'

const EatStartGame = () => {
    const dispatch = useDispatch()
    return(
        <div className="eat-opening-menu">
            <button 
                className="eatButton" 
                onClick={() => dispatch(gameStart())}
                style={{
                    position: 'absolute',
                    bottom: '80px',
                    left: '400px'
                }}
            >
                al;skdjfas
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

function EatingGame() {
    const dispatch = useDispatch()
    useKeyPress()
    const score = useSelector(selectScore)
    const status = useSelector(selectStatus)

    React.useEffect(() => {
        let timer
        if (status === "playing") {
            timer = setInterval(() => {
                dispatch(gameTick())
            }, 16.67)
        }
        
    })
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
                <Player />
            </div>
            {(status === "new" || status === "over") && <EatStartGame />}
        </>
        
    )
}

export default EatingGame