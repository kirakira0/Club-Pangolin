import React, { useState } from 'react';
import './styles.css'
import {MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE} from '../../config/constants.js'
import {backgrounds, scenes} from './scenes.js'

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
        padding: '0px'}}>
    </div>
}


const Map = ({ tiles }) => {
    const [sceneIndex, setScene] = useState(1);

    return(
        <div style={{
                width: MAP_WIDTH+'px',
                height: MAP_HEIGHT+'px',
                backgroundColor: backgrounds[sceneIndex].color,
                border: '4px solid white',
                margin:  '10px auto',
                display: 'left'
            }}
        >
        {scenes[sceneIndex].map( row => row.map(tile => <MapTile tile={tile}/>) )}
        </div>
    )
}

export default Map
