import React from 'react';
import Map from './features/map'
import Player from "./features/player"
import './App.css'
import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from './config/constants.js'

function App() {
  return (
    <div>
          <h1>Club Pangolin</h1>             
              <Map />
    </div>
  );
}

export default App;
