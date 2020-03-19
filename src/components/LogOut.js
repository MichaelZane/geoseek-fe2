import React from "react";
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const Btn = styled.button `
margin: 0px 25px;
font-size: 1.5rem;
width: 118px;
height: 43px;
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
`


class LogOut extends React.Component {
  state = {
    navigate: false
  };
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ navigate: true });
  };
  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    return <Btn onClick={this.logout}>Log Out</Btn>;
  }
}

export default LogOut