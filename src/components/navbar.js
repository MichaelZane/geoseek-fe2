import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar (){
return(
    <div className = 'navbar' data-testid="navLinks" >
    <h1>geoSeek</h1>
    {/* <Router> */}
    
        <NavLink to = '/CreateGem'>Create a Gem</NavLink>
    
        <NavLink to = '/ViewGem'>View Gems</NavLink>
    
    {/* <Route path = '/CreateGem' component = {CreateGem}/>
    <button onClick= {toggleGem}>View Gems</button>
    </Router> */}
    </div>
);
}

export default NavBar;

