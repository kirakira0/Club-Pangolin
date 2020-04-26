import React from 'react';
import Map from './features/map'
import Home from './Home'; 
import Game from './Game'; 
import Player from "./features/player"
import './App.css'
import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from './config/constants.js'
import {Route, Link} from 'react-router-dom'; 

function App() {
  return (
    <div>
        <Route exact path='/' component={Home}/> 
        <Route exact path='/game' component={Game}/> 

    </div>
  );
}

export default App;
