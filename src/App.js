import React from 'react';
import Home from './Home';
import Game from './Game';
import Minigame1 from './Minigame1';
import Minigame2 from './Minigame2';
import Player from "./features/player"
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/game' component={Game}/>
        <Route exact path='/minigame1' component={Minigame1}/>
        <Route exact path='/minigame2' component={Minigame2}/>

    </div>
  );
}

export default App;
