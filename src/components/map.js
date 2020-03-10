
import React,{useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import axios from 'axios'

function Map({ latitude, longitude }){
const [viewport, setViewport] = useState({
    latitude: 37.741,
    longitude: -122.433,
    width: "75%",
    height: "750px",
    zoom: 11.69
});

 const [gems,setGems] = useState([])

 const [selectedGem, setSelectedGem] = useState(null)
  

useEffect(()=> {
    setViewport({ ...viewport, latitude, longitude})
},[latitude, longitude])

// function submitGemHandler(formData) {
// handle form data submit
// Update state with new data.
// call setGems this will trigger a remounting of component


// Refactor such that createGem component becomes child component of Map.
// Pass the submitGemHandler down through props
// inside create gem send formdata back through submit gem handler
// be sure to clear state on child after submitting.
  
// 

useEffect(()=>{
    axios.get('https://geoseek-be-stage.herokuapp.com/api/gems')
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
        mapStyle = "mapbox://styles/geoseek/ck7b5gau8002g1ip7b81etzj4"
        onViewportChange = {viewport => {setViewport(viewport)}}
        onClick = {()=>setSelectedGem(null)}
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