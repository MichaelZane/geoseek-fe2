import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import Logo from '../images/logo.png'

const Nav = styled.div`
border-bottom: 3px solid black;
background-color:  #30364A;
display: flex;
align-items: center;
justify-content: space-between;
div {
    margin-right: 2%;
}
button {
    margin: 0px 25px;
    font-size: 1.5rem;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: #C66DB2;
    border: none;
    color: white;
    text-align: center;
    font-size: 20px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    // opacity: 0.6;
    // transition: opacity .55s ease-in-out;
    // -moz-transition: opacity .55s ease-in-out;
    // -webkit-transition: opacity .55s ease-in-out;

   :hover {
       opacity: 1.0;
       transition: opacity .55s ease-in-out;
       -moz-transition: opacity .55s ease-in-out;
       -webkit-transition: opacity .55s ease-in-out;
       background-color: #FF69B4;
       border: 2px solid black;
   }
}
.link {
    text-decoration: none;
}
h1 {
    color: white;
    margin-left: 20px;
}

    .link {
        text-decoration: none;
        outline: none;
        color:white;
    }
`
function NavBar () {
    

    return (
        <Nav>
            <div>
            <Link to='/'><img src={Logo} alt="Main Logo" /></Link>
            {/* <Router> */}
            </div>
            <div>
                <button><Link className='link' to='/Register'>Register</Link></button>
                <button><Link className='link' to='/Login'>Log In</Link></button>
                <button><Link className='link' to='/CreateGem'>Create a Gem</Link></button>
            
            
                <button><Link className='link' to='/ViewGem'>View Gems</Link></button>
            
            </div>

            {/* <Route path = '/CreateGem' component = {CreateGem}/>
    <button onClick= {toggleGem}>View Gems</button>
    </Router> */}
        </Nav>
    );

}
export default NavBar;

