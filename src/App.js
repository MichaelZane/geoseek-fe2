import React, { useState, Component } from "react";
import NavBar from "./components/navbar";
import Map from "./components/map";
import ViewGem from "./components/viewGem";
import CreateGem from "./components/createGem";
import styled from "styled-components";

import { BrowserRouter as Router, Route } from "react-router-dom";



import './App.css';
import Header from "./components/Header/Header";


const BACKEND_URL = process.env.BACKEND_URL
import React, {useState} from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGem'
import Register from './components/register'
import Login from './components/Login'
import UserDashboard from './components/dashboard'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  const MapAndGems = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  `

  const [[latitude, longitude], setLatLong] = useState([36.955992,-121.971428])
  const [refresh, setRefresh] = useState(false);
  const updatePosition = (latitude, longitude) => {
    setLatLong([latitude, longitude]);
  };
  

  return (
    <Router>
      <div>
        <NavBar />
        <div>
 
          <MapAndGems>
            <Map refresh={refresh} latitude={latitude} longitude={longitude} />
            {/* <Route exact path="/" /> */}
            <Route
              path="/ViewGem"
              component={() => <ViewGem updatePosition={updatePosition} />}
            />
            <Route
              path="/CreateGem"
              render={props => (
                <CreateGem
                  {...props}
                  latitude={latitude}
                  longitude={longitude}
                  updatePosition={updatePosition}
                  setRefresh={setRefresh}
                />
              )}
            />
          </MapAndGems>
          <landingPage/>
            <Route exact path='/' />
            <Route path='/ViewGem' component={() => <ViewGem updatePosition={updatePosition} />} />
            <Route path='/UserDash' component={UserDashboard}/>
            <Route path='/CreateGem'
              render={(props) => <CreateGem {...props} latitude={latitude} longitude={longitude} updatePosition={updatePosition} setRefresh={setRefresh} />} />
        </div>
      </div>
    </Router>
  ); 
}

export default App;
