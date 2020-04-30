import React from 'react';
import './Home.css';
import App from './App';
import Game from './Game';
import Minigame1 from './Minigame1';
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
            <p> </p>
            <div className = "Header">
                <h1>Club Pangolin</h1>
                <p>Welcome to Club Pangolin, a project dedicated to fighting pangolin trafficking through education and entertainment </p>
                <p> </p>
            </div>
            <div className="row">
                <div className = "col1">
                    <img src={photo2} width="100%" alt="Logo" />
                    <p>Pangolins can protect their nose and ears by closing them so ants can't get in. <a href="https://www.nationalgeographic.com/animals/mammals/group/pangolins/" target="_blank">(source)</a>© Nigel Dennis, African Pangolin Working Group</p>
                    <img src={photo1} width="100%" alt="Logo" />
                    <p>Pangolins carry their babies on their tails. Baby pangolins have soft scales when they are first born, which harden after two days. <a href="https://www.nationalgeographic.com/animals/mammals/group/pangolins/" target="_blank">(source)</a> © Firdia Lisnawati</p>
                    <img src={photo5} width="100%" alt="Logo" />
                    <p>A long-tailed or black-bellied pangolin (Uromanis tetradactyla) © Maja Gudehus / Sangha Pangolin Project</p>
                </div>
                <div className="col2">
                    <h2>About</h2>
                    <p>Pangolins, or "scaly anteaters" are small mammals native to Asia and Maya Sub-Saharan Africa.
                        Their major defense mechanism, as well as their most prominent feature, is a covering of large,
                        protective keratin scales that run from the middle of their heads down to the tips of their tails.
                        Pangolins have been driven to near extinction by deforestation and poaching, and according to
                        the International Union for Conservation of Nature, these mild-mannered, largely defenseless
                        animals are the most trafficked mammals in the world. To learn more about the pangolin and what
                        you can do to help, we highly suggest visiting the <a href="https://www.worldwildlife.org/stories/the-fight-to-stop-pangolin-extinction" target="_blank">
                         World Wildlife Fund</a> and the <a href="https://www.awf.org/wildlife-conservation/pangolin" target="_blank">African Wildlife
                        Foundation's</a> websites. You may also enjoy playing some of the games we have developed to learn
                         about pangolins in a more interactive way.
                    </p>
                    <h2>Exploration Game</h2>
                        <p>A sentence introduction and then a link to <Link to='/game' target="_blank"> exploration game</Link></p>
                    <h2>Title of Minigame 1</h2>
                        <p>A sentence introduction and then a link to <Link to='/minigame1' target="_blank">Minigame 1</Link></p>
                    <h2>Title of Minigame 2</h2>
                        <p>A sentence introduction and then a link to <Link to='/minigame2' target="_blank">Minigame 2</Link></p>
                    <h2>Credits</h2>
                    <p>Club Pangolin was created by Maya Epps (Github username: mayaepps), Julian Gonzalez (Jgonz156)
                        Josh Stukenborg (jstukenb), and Kira Toal (kirakira0). Information about the specific technologies
                        and tutorials we utilised to bring this project to life can be found at Club
                        Pangolin's <a href="https://github.com/kirakira0/Club-Pangolin" target="_blank">Github repository page</a>. We
                        would like to thank the LMU CS department's Dr. Ray Toal, Marco Berardini, Maya Pegler-Gordon,
                        and Masao Kitamura for their support and guidence throughout this process.
                    </p>
                </div>
                <div className="col3">
                    <img src={photo4} width="100%" alt="Logo" />
                    <p>A ground pangolin, also known as Temminck’s pangolin or Cape pangolin (Manis temminckii) © Dana Allen</p>
                    <img src={photo3} width="100%" alt="Logo" />
                    <p>Pangolin scales are made of the same substance that human fingernails and rhino harns are made of: keratin. <a href="https://www.nationalgeographic.com/animals/mammals/group/pangolins/" target="_blank">(source)</a> © Nigel Dennis</p>
                    <img src={photo6} width="100%" alt="Logo" />
                    <p>Ground pangolin taking a bath © Scott Hurd</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
