import React,{useState, useEffect} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
import axios from 'axios'

function Map(){
const [viewport, setViewport] = useState({
    latitude: 36.955992,
    longitude: -121.971428,
    width: "80%",
    height: "900px",
    zoom: 10
});
const [gems,setGems] = useState([])

useEffect(()=>{
    axios.get('https://geoseek-be-test.herokuapp.com/api/gems')
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
                    <div>GEM</div>
                </Marker>
            ))}
        </ReactMapGL>

        
    );
}

export default Map