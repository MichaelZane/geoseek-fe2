import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import axios from "axios";

function Map ({latitude, longitude, refresh}) {
    const [viewport, setViewport] = useState({

        latitude: 37.754,
        longitude: -122.443,
        width: "100%",
        height: "90%",
        zoom: 11.6
    });

    const [gems, setGems] = useState([])

    const [selectedGem, setSelectedGem] = useState(null)

  useEffect(() => {
    setViewport({ ...viewport, latitude, longitude });
  }, [latitude, longitude]);

    useEffect(() => {
        setViewport({...viewport, latitude, longitude})
    }, [latitude, longitude])



    useEffect(() => {
      let body = {
        "longitude": -122.446929,
        "latitude": 37.754354,
        "threshold": 15
      }
    axios.post('https://geoseek-be-stage.herokuapp.com/api/gems/findNearby', body)
       
            .then(res => {
                console.log(res)
                setGems(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [refresh])



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
                            <img src='/gem-copy2.png' alt="Gem Icon2" />
                        ) :
                            <img src='/gem.png' alt="Gem Icon" />}
                    </button>
                </Marker>
            ))}
            {selectedGem && (
                <Popup latitude={selectedGem.latitude} longitude={selectedGem.longitude} onClose={() => setSelectedGem(null)}>
                    <div>
                        <h2>{`Title: ${ selectedGem.title }`}</h2>
                        <p>{`Difficulty: ${ selectedGem.difficulty }`}</p>
                        <p>{`Description: ${ selectedGem.description }`}</p>
                    </div>
                </Popup>
            )}
        </ReactMapGL>



    );
}

export default Map;
