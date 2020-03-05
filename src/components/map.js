import React,{useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import axios from 'axios'

function Map(){
const [viewport, setViewport] = useState({
    latitude: 37.754354,
    longitude: -122.446929, 
    width: "80%",
    height: "900px",
    zoom: 10
});

const [gems,setGems] = useState([])

const [selectedGem, setSelectedGem] = useState(null)

useEffect(()=>{
    let body = {
        "longitude": -122.446929,
        "latitude": 37.754354,
        "threshold": 15
      }
    axios.post('https://localhost:5000/api/gems/findNearby', body)
    .then(res=>{
        console.log(res)
        setGems(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[])



    return(
        <ReactMapGL
        {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle = "mapbox://styles/geoseek/ck74zh2wi18f61ill2ttcy6hp"
        onViewportChange = {viewport => {setViewport(viewport)}}
        >
            {gems.map((gem)=>(
                <Marker key = {gem.id} latitude = {gem.latitude} longitude = {gem.longitude}>
                    <button className = 'marker-btn' onClick = {e =>{
                        e.preventDefault()
                        setSelectedGem(gem)
                    }} >
                        <img src = '/gem.png' alt = "Gem Icon"/>
                    </button>
                </Marker>
            ))}
            {selectedGem && (
                <Popup latitude = {selectedGem.latitude} longitude = {selectedGem.longitude} onClose = {()=>setSelectedGem(null)}>
                    <div>
                        <h2>{`Title: ${selectedGem.title}`}</h2>
                        <p>{`Dificulty: ${selectedGem.difficulty}`}</p>
                        <p>{`Description: ${selectedGem.description}`}</p>
                    </div>
                </Popup>
            )}
        </ReactMapGL>

        
    );
}

export default Map