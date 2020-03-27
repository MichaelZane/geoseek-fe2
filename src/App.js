import React, {useState} from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import ViewGem from './components/viewGem'
import CreateGem from './components/createGem'
import Register from './components/register'
import Login from './components/Login'
import UserDashboard from './components/dashboard'
import styled from 'styled-components'
import RegisterImg from './images/RegisterImg.jpg'
import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header"
import ProtetedRoute from './utils/protectedRoute';
import './App.css';


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
  const [RegLogRendered, setRegLogRendered] = useState(false);

  if (RegLogRendered === true) {
    return (
      <AppContainer>
            <NavBar/>
            <MapAndGems>
                <Route exact path='/' component={() => <Header setRegLogRendered={setRegLogRendered}/>} />
                <Route path='/Register' render={(props) => <Register {...props} setRegLogRendered={setRegLogRendered} />} />
                <Route path='/Login' component={(props) => <Login {...props} setRefresh={setRefresh} setRegLogRendered={setRegLogRendered} />} />
                <Route path='/UserDash' component={(props) => <UserDashboard {...props} setRegLogRendered={setRegLogRendered} />}/>
            </MapAndGems>
      </AppContainer>      
    )
  } else {
    return (
      <AppContainer>
            <NavBar/>
            <MapAndGems>
                <Route exact path='/' component={() => <Header setRegLogRendered={setRegLogRendered}/>} />
                <Route path='*'>
                  <Map refresh={refresh} setRefresh={setRefresh} latitude={latitude} longitude={longitude} setRegLogRendered={setRegLogRendered}/>
                </Route>
                <Route path='/Register' render={(props) => <Register {...props} setRegLogRendered={setRegLogRendered} />} />
                <Route path='/Login' render={(props) => <Login {...props} refresh={refresh} setRefresh={setRefresh} setRegLogRendered={setRegLogRendered} />} />
                <ProtetedRoute path='/CreateGem' component={props => <CreateGem {...props} setRegLogRendered={setRegLogRendered} latitude={latitude} longitude={longitude} updatePosition={updatePosition} setRefresh={setRefresh} />} />
                <Route path='/ViewGem' render={(props) => <ViewGem {...props} refresh={refresh} setRegLogRendered={setRegLogRendered} updatePosition={updatePosition} />} />
                <ProtetedRoute path='/UserDash' component={(props) => <UserDashboard {...props} setRegLogRendered={setRegLogRendered} />}/>
            </MapAndGems>
      </AppContainer>
    )
  }
}

export default App;














//   return (
//     <AppContainer>
//       
//       <MapAndGems>
//         {RegLogRendered === true
//            ? <div>
//               <Route exact path='/' component={() => <Header setRegLogRendered={setRegLogRendered}/>} />
//               <Route path='/Register' render={(props) => <Register {...props} setRegLogRendered={setRegLogRendered} />} />
//               <Route path='/Login' component={(props) => <Login {...props} setRefresh={setRefresh} setRegLogRendered={setRegLogRendered} />} />
//             </div>
//           : 
//             <div>
//               <Route exact path='/' component={() => <Header setRegLogRendered={setRegLogRendered}/>} />
//               <Map refresh={refresh} setRefresh={setRefresh} latitude={latitude} longitude={longitude} />
//               <Route path='/Register' render={(props) => <Register {...props} setRegLogRendered={setRegLogRendered} />} />
//               <Route path='/Login' component={(props) => <Login {...props} setRefresh={setRefresh} setRegLogRendered={setRegLogRendered} />} />
//               <ProtetedRoute path='/CreateGem' component={props => <CreateGem {...props} setRegLogRendered={setRegLogRendered} latitude={latitude} longitude={longitude} updatePosition={updatePosition} setRefresh={setRefresh} />} />
//               <Route path='/ViewGem' component={() => <ViewGem refresh={refresh} setRegLogRendered={setRegLogRendered} updatePosition={updatePosition} />} />
//             </div>
//           }
//         </MapAndGems>
//         {/* <Route path='/UserDash' component={(props) => <UserDashboard {...props} setRegLogRendered={setRegLogRendered} />}/> */}
//     </AppContainer>
//   );
// }

// export default App