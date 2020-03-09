import React from 'react'
import styled from 'styled-components'



function GemCard ({title, latitude, longitude}) {


    return (
        <div className='gem-card'>
            <h2>{title}</h2>
            <p>Lat: {latitude}</p>
            <p>Lon: {longitude}</p>

        </div>
    );
}

export default GemCard;