import React from 'react'
import { Link } from "react-router-dom"

function NavBar (){
return(
    <div className = 'navbar'>
    <h1>geoSeek</h1>
    {/* <Router> */}
    <Link to = '/CreateGem'>Create a Gem</Link>
    <Link to = '/ViewGem'>View Gems</Link>
    {/* <Route path = '/CreateGem' component = {CreateGem}/>
    <button onClick= {toggleGem}>View Gems</button>
    </Router> */}
    </div>
);
}

export default NavBar;

