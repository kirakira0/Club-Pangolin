import React, { useState } from 'react';
import './styles.css'

//https://www.youtube.com/watch?v=DyWUW7Px1MQ


const scenes = [
    // 0 means there is nothing in that tile
    // 1 means rock
    // 2 means tree
    [
        [1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
]

const backgrounds = [{color: 'blue'},       
                    {color: 'green'}]


const MapTile = ({ tile }) => {
    let sprite;
    switch (tile) {
        case 1:
            sprite = 'rock'
            break;
        case 2:
            sprite = 'tree'
            break;
        default:
            sprite = 'xxx'
    }

    return <div className = {"tile " + sprite}
        style={{ 
        width: '40px',
        height: '40px',
        padding: '0px'}}>
    </div>
}


const Map = ({ props }) => {
    const [sceneNumber, setScene] = useState(0);

    return(
        <div style={{
                width: '800px',
                height: '400px',
                backgroundColor: backgrounds[sceneNumber].color,
                margin:  '10px auto'
            }}
        > 
        {
            scenes[sceneNumber].map( row => row.map(tile => <MapTile tile={tile}/>) )
        }
        </div>
    )
}

export default Map