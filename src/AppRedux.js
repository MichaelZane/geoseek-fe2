import React, { useState } from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGemRedux'

import { BrowserRouter as Router, Route, } from "react-router-dom"; 
function App() {
  const [[latitude, longitude], setLatLong] = useState([36.955992, -121.971428]) 

  const updatePosition = (latitude,longitude) => {
    setLatLong([ latitude, longitude ])
  }

  return (
    <Router>
    <div>
      <NavBar/>
      <div style={{display: 'flex'}}>
        <div style={{flexBasis: '80%'}}>
          <Map latitude={latitude} longitude={longitude}/>
        </div>
        <aside style={{flexBasis:'20%'}}>
          <Route path = '/CreateGem' component = {CreateGem}/>
          <Route path = '/ViewGem' component = {()=><ViewGem updatePosition={updatePosition}/>}/>
        
        </aside>
        </div>
    </div>
    </Router>
  );
}

export default App;
