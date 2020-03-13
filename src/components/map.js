
import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import axios from 'axios'



function Map ({latitude, longitude, refresh}) {
    const [viewport, setViewport] = useState({

        latitude: 33.812468,
        longitude: -117.918989,
        width: "100%",
        height: "90%",
        zoom: 15
    });

    const [gems, setGems] = useState([])

    const [selectedGem, setSelectedGem] = useState(null)



    useEffect(() => {
        setViewport({...viewport, latitude, longitude})
    }, [latitude, longitude])



    useEffect(() => {
        axios.get('https://geoseek-be-stage.herokuapp.com/api/gems')
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
                            <img src='/pinkGem.png' alt="Selected Gem Icon" />
                        ) :
                            <img src='/blueGem.png' alt="Gem Icon" />}
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

export default Map