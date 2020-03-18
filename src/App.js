import React, {useState} from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGem'
import Register from './components/register'
import Login from './components/Login'
import UserDashboard from './components/userDashboard'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const BACKEND_URL = process.env.BACKEND_URL

function App() {
  const MapAndGems = styled.div`
    display: flex;
    height: 100vh;
    min-height: 100vh;
  `;

  const [[latitude, longitude], setLatLong] = useState([36.955992,-121.971428])
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
            <Route path='/userDash' component={UserDashboard}/>
            <Route path='/ViewGem' component={() => <ViewGem updatePosition={updatePosition} />} />
            <Route path='/CreateGem'
              render={(props) => <CreateGem {...props} latitude={latitude} longitude={longitude} updatePosition={updatePosition} setRefresh={setRefresh} />} />
              <Route path='/Register' component={Register} />
              <Route path='/Login' component={Login} />
          </MapAndGems>
        </div>
      </div>
    </Router>
  );
}

export default App;