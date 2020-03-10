import React, {useState} from 'react';
import NavBar from './components/NavBar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGem'
import styled from 'styled-components'

import {BrowserRouter as Router, Route, } from "react-router-dom";

const MapAndGems = styled.div`
display: flex;
height: 100vh;
min-height: 100vh;
`

function App () {



  const [[latitude, longitude], setLatLong] = useState([36.955992, -121.971428])
  const [refresh, setRefresh] = useState(false);
  const updatePosition = (latitude, longitude) => {
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
