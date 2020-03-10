import axiosWithAuth from   '../utils/axiosWithAuth'
import axios from 'axios'
  
export const CREATE_GEM_START = 'CREATE_GEM_START';
export const CREATE_GEM_SUCCESS = 'CREATE_GEM_SUCCESS';
export const CREATE_GEM_FAIL = 'CREATE_GEM_FAIL';

export const GEOCODING_START = 'GEOCODING_START'
export const GEOCODING_SUCCESS = 'GEOCODING_SUCCESS'
export const GEOCODING_FAILURE = 'GEOCODING_FAILURE'
export const COORDINATE_VALUES = "COORDINATE_VALUES"

export const geocode = address => dispatch => {
  dispatch({ type: GEOCODING_START });
  axios
  .get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${address.address}&outFields=Match_addr,Addr_type`)
  .then(response => {
    console.log('*****geocoding cordinates from get*****', response.data.candidates[0].location)
           
    dispatch({ type: GEOCODING_SUCCESS, payload: response.data.candidates[0].location });
  })
  
  .catch(error=>{
    console.log(error, '*******GEOCODING ERROR*********')
    dispatch({ type: GEOCODING_FAILURE, payload: error.response})
  })
  dispatch({ type: CREATE_GEM_START})
}

export const createGemAction = newGem => dispatch =>{
  dispatch({ type: CREATE_GEM_START, payload: newGem })
} 

export const postGem = newGem => dispatch => {
    dispatch({ type: CREATE_GEM_START });
    axiosWithAuth()
    .post(`/api/gems`, newGem)
    .then(response => {
      console.log(response)
      dispatch({ type: CREATE_GEM_SUCCESS, payload: newGem });
      })

    .catch(error => {
        console.log("*****Gem Posting error*****",error)
        dispatch({ type: CREATE_GEM_FAIL, payload: error.response });
      });
  };







