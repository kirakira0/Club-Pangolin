import React, {useEffect} from 'react';
import Map from './features/map'
import Home from './Home';
import Player from "./features/player"
import './App.css'
import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from './config/constants.js'
import {Route, Link} from 'react-router-dom'; 
import { db } from './firebase'; 
import store from "./config/store"

let displayData = "";
let dataBase = null;

function Game() {

 useEffect(() => {
   // get the whole collection
   db.collection("facts")
   .get()
   .then(querySnapshot => {
       const data = querySnapshot.docs.map(doc => doc.data());
       dataBase = data
     console.log(data); 
     console.log(data[0].diet); 
     console.log(data[0].sleep); 
     
   });
 }, []); 

    function handleKeyDown(e) {
        e.preventDefault()
        console.log("a")
        if (store.getState().chest.value === 1) {
            console.log("you are hitting a chest")
            displayData = dataBase[0].diet
            displayData = "bob2"
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })

  return (
    <div>
          <h1>Club Pangolin</h1>
          <p>Return <Link to='/'>Home</Link></p>
          <p>Explore some of the different environments that pangolins inhabit!</p>
          <p>Use the arrow keys to move around and the enter key to interact with objects!</p>

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
          <h2> {displayData} </h2>
    </div>
  );
}

export default Game;
