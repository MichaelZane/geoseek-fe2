import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import '../Logo.css'

const NavBarS = styled.div`
    border-bottom: 3px solid black;
    height: 120px;
    width: 100%;
    background-color:  #30364A;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // div {
    //     margin-right: 2%;
    // }

    .link {
        margin: 0px 25px;
        padding: 10px;
        font-size: 1.5rem;
        width: 800px;
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
        outline: none;
        // opacity: 0.6;
        // transition: opacity .55s ease-in-out;
        // -moz-transition: opacity .55s ease-in-out;
        // -webkit-transition: opacity .55s ease-in-out;
   
       :hover {
           opacity: 1.0;
           transform: scale(3.3);
           -moz-transition: opacity .55s ease-in-out;
           -webkit-transition: opacity .55s ease-in-out;
           background-color: #FF69B4;

       }
    }

    h1 {
        color: #FF69B4;
        font-size: 2.5rem;
    }
    
    img {
        width: 80px;
        height: 3%;
        margin: 10px 0px 10px 20px;
    }
    `


function NavBar () {

    return (
        <NavBarS>
            {/* <a href='/'><img src={Logo} alt="Main Logo" /></a> */}
            {/* <Router> */}
            <a href='/' className="sign">
                <span className="fast-flicker">g</span><span>eos</span><span className="flicker">e</span><span>ek</span>
            </a>
            {/* <h1>GeoSeek!</h1> */}
            <div>
                <Link className='link' to='/Register'>Register</Link>
                <Link className='link' to='/Login'>Log In</Link>
                <Link className='link' to='/CreateGem'>Create a Gem</Link>
                <Link className='link' to='/ViewGem'>View Gems</Link>

            </div>

            {/* <Route path = '/CreateGem' component = {CreateGem}/>
    <button onClick= {toggleGem}>View Gems</button>
    </Router> */}
        </NavBarS>
    );
}

export default NavBar;

