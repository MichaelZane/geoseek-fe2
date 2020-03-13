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

  const [[latitude, longitude], setLatLong] = useState([33.812468, -117.918989])
  const [refresh, setRefresh] = useState(false);
  const updatePosition = (latitude, longitude) => {
    console.log("this is the lat and lng >>>>>>>>>>>", latitude, longitude);
    setLatLong([latitude, longitude])
  }

  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <MapAndGems>
            <Map refresh={refresh} latitude={latitude} longitude={longitude} />
            <Route exact path='/' />
            <Route path='/ViewGem' component={() => <ViewGem updatePosition={updatePosition} />} />
            <Route path='/CreateGem'
              render={(props) => <CreateGem {...props} latitude={latitude} longitude={longitude} updatePosition={updatePosition} setRefresh={setRefresh} />} />
          </MapAndGems>
        </div>
      </div>
    </Router>
  );
}

export default App;
