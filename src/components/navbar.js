import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import '../Logo.css'
import LogOut from './LogOut'

const Nav = styled.div`
border-bottom: 3px solid black;
background-color: #30364a;
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
@media(max-width: 1035px){
  height: 250px;
  display: flex;
  flex-direction: column;
  flex wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
@media(max-width: 700px){
  height: 500px;
}
  div {   margin-right: 2%;  } 
  
  .button {
    margin: 0px 25px;
    font-size: 1.5rem;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color:#FF69B4;
    border: none;
    color: white;
    text-align: center;
    font-size: 20px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    padding:10px; 
    // opacity: 0.6;
    // transition: opacity .55s ease-in-out;
    // -moz-transition: opacity .55s ease-in-out;
    // -webkit-transition: opacity .55s ease-in-out;
   :hover {
       opacity: 1.0;
       transition: opacity .55s ease-in-out;
       -moz-transition: opacity .55s ease-in-out;
       -webkit-transition: opacity .55s ease-in-out;
       background-color:#C66DB2;
       //border: 2px solid black;
   }
} 
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
const ButonContainer = styled.div`
@media(max-width: 700px){
  height:300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  
  .button{
    height: 35px;
    width: 300px;
  }
}
`

function NavBar (props) {

  return (
    <Nav>
      {/* <Router> */}
      <div>
      <a href='/' className="sign">
        <span className="fast-flicker">g</span><span>eos</span><span className="flicker">e</span><span>ek</span>
      </a>
      </div>
      <ButonContainer>
        <Link className='button' to='/Register'>Register</Link>
        <Link className='button' to='/UserDash'>Dashboard</Link>
        <Link className='button' to='/Login'>Log In</Link>
        <Link className='button' to='/CreateGem'>Create a Gem</Link>
        <Link className='button' to='/ViewGem'>View Gems</Link>
        <>
        {localStorage.getItem("token") && (
        <LogOut />
        )}
        </>
      </ButonContainer>

      {/* <Route path = '/CreateGem' component = {CreateGem}/>
    <button onClick= {toggleGem}>View Gems</button>
    </Router> */}
    </Nav>
  );
}
export default NavBar;