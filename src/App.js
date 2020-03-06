import React, {useState} from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGem'
import styled from 'styled-components'

import {BrowserRouter as Router, Route, } from "react-router-dom";
function App () {
  const MapAndGems = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  `

  const [[latitude, longitude], setLatLong] = useState([36.955992, -121.971428])

  const updatePosition = (latitude, longitude) => {
    setLatLong([latitude, longitude])
  }

  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <MapAndGems>
            <Map latitude={latitude} longitude={longitude} />
            <Route path='/ViewGem' component={() => <ViewGem updatePosition={updatePosition} />} />
            <Route path='/CreateGem' component={CreateGem} />
          </MapAndGems>
        </div>
      </div>
    </Router>
  );
}

export default App;
