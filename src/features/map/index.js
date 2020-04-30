import React, { useState } from 'react';
import './styles.css'
import {MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE} from '../../config/constants.js'
import { backgrounds, scenes } from './scenes.js'
import Player from "../player"
import store from "../../config/store"
import { useStore } from 'react-redux';

//tutorials used: https://www.youtube.com/watch?v=DyWUW7Px1MQ
//https://www.youtube.com/watch?v=QZcNGfcn-oo&t=1089s
//https://www.youtube.com/watch?v=J6Xs3eGTfTQ

const MapTile = ({ tile }) => {
    let sprite;
    switch (tile) {
        case 1:
            sprite = 'rock'
            break;
        case 2:
            sprite = 'tree'
            break;
        case 3:
            sprite = 'chest'
            break;
        case 4:
            sprite = 'fern'
            break;
        case 5:
            sprite = 'forest_tree'
            break;
        case 6:
            sprite = 'twig'
            break;
        case 7:
            sprite = 'bird'
            break;
        default:
            sprite = 'grass'
    }

    return <div className = {"tile " + sprite}
        style={{
        width: SPRITE_SIZE,
            height: SPRITE_SIZE,
            border: "0.0001px solid white",
            padding: '0px',
            margin: "0px 0px 0px 0px"
        }} >

    </div>
}


const Map = ({ tiles }) => {

    function handleKeyDown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 49:
                return setScene(0);
            case 50:
                return setScene(1);
            case 51:
                return setScene(2);
            default:
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })


    let [sceneIndex, setScene] = useState(0);
    let currentKey = -1;


    return (
        <div style={{
                    position: "absolute",
                    width: MAP_WIDTH+'px',
                    height: MAP_HEIGHT+'px',
                    backgroundColor: backgrounds[sceneIndex].color,
                    border: '4px solid white',
                    display: 'left',
                    padding: "0px"
                }}
        >
              {scenes[sceneIndex].map(row => row.map(tile => <MapTile key={currentKey+=1} tile={tile} />))}

            </div>
    )
}
export default Map
