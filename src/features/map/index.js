import React, { useState } from 'react';
import './styles.css'
import {MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE} from '../../config/constants.js'
import { backgrounds, scenes } from './scenes.js'
import Player from "../player"
import store from "../../config/store"
import { useStore } from 'react-redux';

//tutorials used: https://www.youtube.com/watch?v=DyWUW7Px1MQ
//https://www.youtube.com/watch?v=QZcNGfcn-oo&t=1089s



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
            border: "0px solid white",
            padding: '0px',
            margin: "0px"
        }}>

    </div>
}


const Map = ({ tiles }) => {

    function handleKeyDown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 49:
                return setScene(sceneIndex = 0);
            case 50:
                return setScene(sceneIndex = 1);
            case 51:
                return setScene(sceneIndex = 2);
            default:
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })


    let [sceneIndex, setScene] = useState(0);
    

    return (
        <div style={{
                    position: "relative",
                    width: MAP_WIDTH+'px',
                    height: MAP_HEIGHT+'px',
                    backgroundColor: backgrounds[sceneIndex].color,
                    border: '4px solid white',
                    margin:  '10px auto',
                    display: 'left'
                }}
        >
            <Player />
            {scenes[sceneIndex].map(row => row.map(tile => <MapTile tile={tile} />))}
            
            </div>
    )
}
export default Map
