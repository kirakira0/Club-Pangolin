import React from 'react';
import Map from './features/map'
import Player from "./features/player"
import './App.css'
import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from './config/constants.js'
import Game from './minigame1/features/game/Game'

function App() {
  return (
    <div>
          <h1>Club Pangolin</h1>             
              <Map />
              <Game />
    </div>
  );
}

export default App;
