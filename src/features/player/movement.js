import store from "../../config/store"
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from "../../config/constants"
import { scenes } from "../map/scenes"
import React, { useState } from 'react';

let currentYPos = 0
let currentXPos = 0
let sceneIndex = 0
let isThereNoObjectData = true

function observeObject(direction, changeType) {
    const sceneData = scenes
    let currentScene = sceneIndex;
    console.log("currentYPos " + currentYPos)
    console.log("currentXPos " + currentXPos)
    let futureX = 0
    let futureY = 0
    if (direction === "X" && changeType === "+" && !(currentXPos === 20)) { futureX = 1 }
    if (direction === "X" && changeType === "-" && !(currentXPos === 0)) { futureX = -1 }
    if (direction === "Y" && changeType === "+" && !(currentYPos === 10)) { futureY = 1 }
    if (direction === "Y" && changeType === "-" && !(currentYPos === 0)) { futureY = -1 }
    if (sceneData[currentScene][currentYPos + futureY][currentXPos + futureX] > 0) {
        return false
    }
    return true
}

function changeCurrentPosition(direction, changeType) {
    isThereNoObjectData = observeObject(direction, changeType);
    if (direction === "X") {

        if (changeType === "+" && currentXPos < 20 && isThereNoObjectData) {
            currentXPos++
        }

        if (changeType === "-" && currentXPos > 0 && isThereNoObjectData) {
            currentXPos--
        }

    }

    if (direction === "Y") {

        if (changeType === "+" && currentYPos < 10 && isThereNoObjectData) {
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
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - 40) && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT) && isThereNoObjectData ? newPos : oldPos
    }

    function dispatchMove(direction) {
        const oldPos = store.getState().player.position
        store.dispatch(
            {
                type: "MOVE_PLAYER",
                payload: {position: observeBoundaries(oldPos, getNewPosition(direction))}
            }
        )
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
            case 49:
                return sceneIndex = 0;
            case 50:
                return sceneIndex = 1;
            case 51:
                return sceneIndex = 2;
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })

    return player
}
