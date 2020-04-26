import React from 'react';
import App from './App';
import Game from './Game'; 
import {Route, Link} from 'react-router-dom';  

// npm install --save react-router-dom


function Home() {
    return(
        <div className = "Home">
            <h1>Home Page</h1>
            <Link to='/game'>Game</Link>
        </div>
    )
}

export default Home; 