import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateGem from './createGem'

function NavBar (){
return(
    <div className = 'navbar'>
    <h1>geoSeek</h1>
    <Router>
    <Link to = '/CreateGem'>Create a Gem</Link>
    <Route path = '/CreateGem' component = {CreateGem}/>
    <Link to = '/'>View Gems</Link>
    </Router>
    </div>
);
}

export default NavBar;

