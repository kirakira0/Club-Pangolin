import React from 'react';
import './Home.css'; 
import App from './App';
import Game from './Game'; 
import {Route, Link} from 'react-router-dom';  

// npm install --save react-router-dom


function Home() {
    return(
        <div className = "Home">
            <h1>Club Pangolin</h1>
            <p>Welcome to Club Pangolin, a project dedicated to fighting pangolin trafficking through education and entertainment </p>
            <Link to='/game'>Game</Link>
        </div>
    )
}

export default Home; 