import React, {useState} from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGemRedux'
import Register from './components/register'
import Login from './components/Login'
import styled from 'styled-components'
import RegisterImg from './images/RegisterImg.jpg'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './utils/protectedRoute'
import ProtetedRoute from './utils/protectedRoute';


const AppContainer = styled.div`
min-height: 100vh;
max-height: 100vh;
`

const MapAndGems = styled.div`
 display: flex;
`

function App () {
  const [[latitude, longitude], setLatLong] = useState([36.955992, -121.971428])
  const [refresh, setRefresh] = useState(false);
  const updatePosition = (latitude, longitude) => {
    setLatLong([latitude, longitude])
  }
  const [RegLogRendered, setRegLogRendered] = useState(false)
  return (
    <AppContainer>
      <NavBar />
      <MapAndGems>
        {RegLogRendered === true
          ? <Route exact path='/' >
            <Map refresh={refresh} latitude={latitude} longitude={longitude} />
          </Route>
          : <Route path='/' >
            <Map refresh={refresh} latitude={latitude} longitude={longitude} />
          </Route>}
        <Route path='/Register' render={(props) => <Register {...props} setRegLogRendered={setRegLogRendered} />} />
        <Route path='/Login' component={(props) => <Login {...props} setRegLogRendered={setRegLogRendered} refresh={refresh} />} />
        <Route path='/ViewGem' component={() => <ViewGem refresh={refresh} setRegLogRendered={setRegLogRendered} updatePosition={updatePosition} />} />
        <ProtetedRoute path='/CreateGem' component={props => (<CreateGem {...props} setRegLogRendered={setRegLogRendered} latitude={latitude} longitude={longitude} updatePosition={updatePosition} setRefresh={setRefresh} />)} />
      </MapAndGems>
    </AppContainer>
  );
}

export default App;