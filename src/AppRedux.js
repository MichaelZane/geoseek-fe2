import React, {useState} from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGemRedux'
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
    // <Router>
    //   <div>
    //     <NavBar />
    //     <div style={{display: 'flex'}}>
    //       <div style={{flexBasis: '80%'}}>
    //         <Map refresh={refresh} latitude={latitude} longitude={longitude} />
    //       </div>
    //       <aside style={{flexBasis: '20%'}}>
    //         <Route path='/CreateGem'
    //           render={(props) => <CreateGem latitude={latitude} longitude={longitude} updatePosition={updatePosition} setRefresh={setRefresh} />} />
    //         <Route path='/ViewGem' component={() => <ViewGem updatePosition={updatePosition} />} />

    //       </aside>
    //     </div>
    //   </div>
    // </Router>
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
          </MapAndGems>
        </div>
      </AppContainer>
    </Router>
  );
}

export default App;
