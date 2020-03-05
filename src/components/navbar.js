import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import Logo from '../images/logo.png'

function NavBar () {
    const NavBar = styled.div`
    border-bottom: 3px solid black;
    background-color:  #30364A;
    display: flex;
    align-items: center;

    div {
        margin-left: 40rem;
    }

    span {
        margin: 0px 25px;
        font-size: 1.5rem;
    }

    .link {
        text-decoration: none;
        color: white;
        background-color: #C66DB2;
        border-radius: 5px;
        padding: 5px;

        :hover {
            opacity: 5
        }
    }

    h1 {
        color: white;
        margin-left: 20px;
    }
    
    img {
        width: 4%;
        height: 4%;
        margin: 10px;
    }
    `
    return (
        <NavBar>
            <img src={Logo} alt="Main Logo" />
            {/* <Router> */}
            <div>
                <span><Link className='link' to='/CreateGem'>Create a Gem</Link></span>
                <span><Link className='link' to='/ViewGem'>View Gems</Link></span>
            </div>

            {/* <Route path = '/CreateGem' component = {CreateGem}/>
    <button onClick= {toggleGem}>View Gems</button>
    </Router> */}
        </NavBar>
    );
}

export default NavBar;

