import store from "../../config/store"
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from "../../config/constants"
import { scenes } from "../map/scenes"
import React, { useState } from 'react';

//tutorials used: https://www.youtube.com/watch?v=DyWUW7Px1MQ
//https://www.youtube.com/watch?v=QZcNGfcn-oo&t=1089s
//https://www.youtube.com/watch?v=J6Xs3eGTfTQ

let currentYPos = 0
let currentXPos = 0
let sceneIndex = 0
let isThereNoObjectData = true
let fireSecondDispatch = false

function observeSceneChange(currentScene) {
    currentXPos = 0
    sceneIndex = currentScene + 1
    store.dispatch({ type: "CHANGE_SCENE", payload: { value: 1 } })
    const oldYPos = store.getState().player.position[1]
    store.dispatch({ type: "MOVE_PLAYER", payload: { position: [0, oldYPos] } })
    fireSecondDispatch = true
}

function observeObject(direction, changeType) {
    const sceneData = scenes
    let currentScene = sceneIndex;
    console.log("currentYPos " + currentYPos)
    console.log("currentXPos " + currentXPos)
    console.log("currentScene " + currentScene)
    let futureX = 0
    let futureY = 0
    if (direction === "X" && changeType === "+" && !(currentXPos === 20)) { futureX = 1 }
    if (direction === "X" && changeType === "-" && !(currentXPos === 0)) { futureX = -1 }
    if (direction === "Y" && changeType === "+" && !(currentYPos === 13)) { futureY = 1 }
    if (direction === "Y" && changeType === "-" && !(currentYPos === 0)) { futureY = -1 }
    if (currentXPos + futureX === 20 && sceneIndex < 2) {
        observeSceneChange(sceneIndex)
    }
    if (sceneData[currentScene][currentYPos + futureY][currentXPos + futureX] > 0) {
        return false
    }
    return true
}

function changeCurrentPosition(direction, changeType) {
    isThereNoObjectData = observeObject(direction, changeType);
    if (direction === "X") {

        if (changeType === "+" && currentXPos < 19 && isThereNoObjectData) {
            currentXPos++
        }

        if (changeType === "-" && currentXPos > 0 && isThereNoObjectData) {
            currentXPos--
        }

    }

    if (direction === "Y") {

        if (changeType === "+" && currentYPos < 13 && isThereNoObjectData) {
            currentYPos++
        }

        if (changeType === "-" && currentYPos > 0 && isThereNoObjectData) {
            currentYPos--
        }

    }
}

export default function handleMovement(player) {
    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
        switch (direction) {
            case "WEST":
                changeCurrentPosition("X","-");
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case "EAST":
                changeCurrentPosition("X","+");
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case "NORTH":
                changeCurrentPosition("Y", "-");
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case "SOUTH":
                changeCurrentPosition("Y", "+");
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
        }
    }



    function observeBoundaries(oldPos, newPos) {
        console.log(isThereNoObjectData)
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - 40) && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - 40) && isThereNoObjectData ? newPos : oldPos
    }

    function dispatchMove(direction) {

            const oldPos = store.getState().player.position
            store.dispatch(
                {
                    type: "MOVE_PLAYER",
                    payload: { position: observeBoundaries(oldPos, getNewPosition(direction)) }
                }
        )
        if (fireSecondDispatch === true) {
            store.dispatch({ type: "MOVE_PLAYER", payload: { position: [0, oldPos[1]] } })
            fireSecondDispatch = false
        }
    }

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {
            case 37:
                return dispatchMove('WEST')
            case 38:
                return dispatchMove('NORTH')
            case 39:
                return dispatchMove('EAST')
            case 40:
                return dispatchMove('SOUTH')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })

    

    return player
}
