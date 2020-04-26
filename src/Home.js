import React from 'react';
import './Home.css'; 
import App from './App';
import Game from './Game'; 
import {Route, Link} from 'react-router-dom';  

// npm install --save react-router-dom


function Home() {
    return(
        <div className = "Home">
            <p>welcome to</p>
            <h1>Club Pangolin</h1>
            <p>a project dedicated to fighting pangolin trafficking through education and entertainment </p>
            <p>developed by maya epps, julian gonzalez, joshua stukenborg, and kira toal</p>
            <Link to='/game'>Game</Link>
        </div>
    )
}

export default Home; 