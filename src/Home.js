import React from 'react';
import './Home.css'; 
import App from './App';
import Game from './Game'; 
import {Route, Link} from 'react-router-dom'; 

import photo1 from "./images/baby_pangolin.jpg";
import photo2 from "./images/adult_pangolin.jpg";
import photo3 from "./images/small_pangolin.jpg";
import photo4 from "./images/large_pangolin.jpg"; 
import photo5 from "./images/long_pangolin.jpg";  
import photo6 from "./images/bathing_pangolin.jpg";    

// npm install --save react-router-dom


function Home() {
    return(
        <div>
            <div className = "Header">
                <h1>Club Pangolin</h1>
                <p>Welcome to Club Pangolin, a project dedicated to fighting pangolin trafficking through education and entertainment </p>            
            </div>
            <div className="row">
                <div className = "col1">
                    {/* <img src={photo1} width="100%" alt="Logo" />
                    <p>A couple sentences about baby pangolins © Firdia Lisnawati</p> */}
                    <img src={photo2} width="100%" alt="Logo" />
                    <p> [[sentence with fact about pangolin]] © Nigel Dennis, African Pangolin Working Group</p>
                    <img src={photo5} width="100%" alt="Logo" />
                    <p>A long-tailed or black-bellied pangolin (Uromanis tetradactyla) © Maja Gudehus / Sangha Pangolin Project</p>
                </div>
                <div className="col2">
                    <Link to='/game'>Game</Link>
                </div>
                <div className="col3">
                    info
                </div>
                <div className="col4">
                    {/* <img src={photo3} width="100%" alt="Logo" />
                    <p>A couple sentences with pangolin facts © Nigel Dennis</p> */}
                    <img src={photo4} width="100%" alt="Logo" />
                    <p>A ground pangolin, also known as Temminck’s pangolin or Cape pangolin (Manis temminckii) © Dana Allen</p>
                    <img src={photo6} width="100%" alt="Logo" />
                    <p>Ground pangolin taking a bath © Scott Hurd</p>
                </div>
            </div>
        </div>
    )
}

export default Home; 