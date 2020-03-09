import React from 'react'
<<<<<<< HEAD

=======
import styled from 'styled-components'

const Gem = styled.div`
color:white;
`
>>>>>>> 318ee86fb8aebbd35cbdcc64779916b8b1273676

function GemCard ({title, latitude, longitude}) {


    return (
<<<<<<< HEAD
        <div className='gem-card'>
=======
        <Gem>
>>>>>>> 318ee86fb8aebbd35cbdcc64779916b8b1273676
            <h2>{title}</h2>
            <p>Lat: {latitude}</p>
            <p>Lon: {longitude}</p>

<<<<<<< HEAD
        </div>
=======
        </Gem>
>>>>>>> 318ee86fb8aebbd35cbdcc64779916b8b1273676
    );
}

export default GemCard;