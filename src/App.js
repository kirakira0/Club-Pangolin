import React from 'react';
import Map from './features/map'
import Player from "./features/player"
import './App.css'
import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from './config/constants.js'

function App() {
  return (
    <div>
          <h1>Club Pangolin</h1> 
          <div style={{
              position: "relative",
              width: MAP_WIDTH + 'px',
              height: MAP_HEIGHT + 'px',
              margin: '10px auto',
              display: 'left',
              padding: "0px"
          }}>
          <Map />
          <section style={{
              position: "absolute",
              width: MAP_WIDTH + 'px',
              height: MAP_HEIGHT + 'px',
              border: '4px solid white',
              display: 'left',
              padding: "0px"
          }}>
              <Player />
              </section>
              </div>
    </div>
  );
}

export default App;
