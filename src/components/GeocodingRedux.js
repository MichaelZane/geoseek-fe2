import React, {useState} from 'react'

import {connect} from "react-redux"
import axios from 'axios'

import { geocode } from '../actions/index copy'


function GeocodingRedux (props) {

    const [address, setAddress] = useState('')
    
    const handleChanges = e =>{
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    const handleGeocodeSubmit = e =>{
        e.preventDefault();
        props.geocode(address)       
    }
    console.log(props.coordinates, '*****these are the coordinates')
    
    return(
       <form>
            <input
            name='address'
            placeholder='Enter an address'
            onChange={handleChanges}
            />
            {console.log('address state', address)}
            <button onClick={handleGeocodeSubmit}>address get request</button>
     </form>
    )
}


const mapStateToProps = state => {
    return{
        state,
        coordinates: state.coordinates
        // address: state.address
    }
}

export default connect(
    mapStateToProps, 
    { geocode }
    )(GeocodingRedux)



//*****************/this code works for the get request*** commmeted out to refactor into Redux*************///////////

    // const handleGeocodeSubmit = e => {
    //     e.preventDefault()
    //          function geocode (address) {
    //     axios
    //       .get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${address.address}&outFields=Match_addr,Addr_type`)
    //       .then(res => {
    //           console.log(res, '********get req********************')
    //             setLongitude(res.data.candidates[0].location.x)
    //             setLatitude(res.data.candidates[0].location.y)
            
    //     })  
    //       .catch(err => {
    //         console.log("***********************gecode err********************************", err)
    //         setLongitude({ loading: "Problem geocoding, please try again" });
    //         setLatitude({ loading: "Problem geocoding, please try again" });
    //       })
    //   }
    //   geocode(address)
    //     }
    //*************************************************************************************************** */