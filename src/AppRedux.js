import React, {useState} from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGemRedux'
import Register from './components/register'
import Login from './components/Login'
import styled from 'styled-components'

import {BrowserRouter as Router, Route, } from "react-router-dom";

const AppContainer = styled.div`
min-height: 100vh;
max-height: 100vh;
`

const MapAndGems = styled.div`
 display: flex;
// min-height: 100%;
// max-height: 100%;
`


function App () {
  const [[latitude, longitude], setLatLong] = useState([36.955992, -121.971428])
  const [refresh, setRefresh] = useState(false);
  const updatePosition = (latitude, longitude) => {
    setLatLong([latitude, longitude])
  }

  return (
    <Router>
      <AppContainer>
        <NavBar />
        <div>
          <MapAndGems>
            <Map refresh={refresh} latitude={latitude} longitude={longitude} />
            <Route exact path='/' />
            <Route path='/ViewGem' component={() => <ViewGem updatePosition={updatePosition} />} />
            <Route path='/CreateGem'
              render={(props) => <CreateGem {...props} latitude={latitude} longitude={longitude} updatePosition={updatePosition} refresh={refresh} setRefresh={setRefresh} />} />
            <Route path='/Register' component={Register} />
            <Route path='/Login' component={Login} />
          </MapAndGems>
        </div>
      </AppContainer>
    </Router>
  );
}

export default App;
