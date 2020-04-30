import React, {useEffect} from 'react';
import Map from './features/map'
import Home from './Home';
import Player from "./features/player"
import './App.css'
import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from './config/constants.js'
import {Route, Link} from 'react-router-dom'; 
import {db} from './firebase'; 

function Game() {

    let firebaseData = "";

  useEffect(() => {
    // get the whole collection
    db.collection("facts")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data); 
        firebaseData = data[0].diet;
        console.log(firebaseData);
    });
  }, []); 

    

  return (
    <div>
          <h1>Club Pangolin</h1>

          <h2>put instructions here</h2>

          <h2> {firebaseData} </h2>

          <Link to='/'>Home</Link>
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

export default Game;
