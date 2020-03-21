import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import axios from 'axios'
import {LngLatBounds} from 'mapbox-gl';



function Map ({latitude, longitude, refresh}) {
    const [viewport, setViewport] = useState({
        latitude: 36.955992,
        longitude: -121.971428,
        width: "100vw",
        height: "90vh",
        zoom: 12
    });
    

    const [gems, setGems] = useState([])
    const [selectedGem, setSelectedGem] = useState(null)

     useEffect(() => {
        const zoom = 12
        setViewport({...viewport, latitude, longitude, zoom})
    }, [latitude, longitude])



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gems`)
            .then(res => {
                setGems(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [refresh])

    function markComplete(gemId){
    
        const userToken = localStorage.getItem('userID')
        let body={
            gem_id: gemId,
            completed_by: userToken
        }
        console.log(body)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/completed`, body)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
      }

    return (
        <ReactMapGL className='Map'
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/geoseek/ck7b5gau8002g1ip7b81etzj4"
            onViewportChange={viewport => {setViewport(viewport)}}
            onClick={() => setSelectedGem(null)}
        >
            {gems.map((gem) => (
                <Marker key={gem.id} latitude={gem.latitude} longitude={gem.longitude}>
                    <button className='marker-btn' onClick={e => {
                        e.preventDefault()
                        setSelectedGem(gem)
                    }} >
                        {selectedGem === gem ? (
                            <img src='/pinkGem.png' alt="Selected Gem Icon" />
                        ) :
                            <img src='/blueGem.png' alt="Gem Icon" />}
                    </button>
                </Marker>
            ))}
            {selectedGem && (
                <Popup id ='popup' latitude={selectedGem.latitude} longitude={selectedGem.longitude} onClose={() => setSelectedGem(null)}>
                    <div>
                        <h2>{`Title: ${ selectedGem.title }`}</h2>
                        <p>{`Difficulty: ${ selectedGem.difficulty }`}</p>
                        <p>{`Description: ${ selectedGem.description }`}</p>
                        <button type='submit' onSubmit={markComplete(selectedGem.id)}>Mark As Complete</button>
                    </div>
                </Popup>
            )}
        </ReactMapGL>
    );
}

export default Map
