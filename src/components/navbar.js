import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import '../Logo.css'

const Nav = styled.div`
border-bottom: 3px solid black;
background-color: #30364a;
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
  div {   margin-right: 2%;  }  
.link {   
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  outline: none;
  font-size: 25px;
  color: #FF69B4;
  :hover {
    opacity: 1.0;
    transition: opacity .55s ease-in-out;
    -moz-transition: opacity .55s ease-in-out;
    -webkit-transition: opacity .55s ease-in-out;
    color: white;
  }
  }` 
  
function NavBar (props) {

  return (
    <Nav>
      {/* <Router> */}
      <a href='/' className="sign">
        <span className="fast-flicker">g</span><span>eos</span><span className="flicker">e</span><span>ek</span>
      </a>
      <div>
        <Link className='link' to='/Register'>Register</Link>
        <Link className='link' to='/Login'>Log In</Link>
        <Link className='link' to='/CreateGem'>Create a Gem</Link>
        <Link className='link' to='/ViewGem'>View Gems</Link>
      </div>

      {/* <Route path = '/CreateGem' component = {CreateGem}/>
    <button onClick= {toggleGem}>View Gems</button>
    </Router> */}
    </Nav>
  );
}
export default NavBar;
