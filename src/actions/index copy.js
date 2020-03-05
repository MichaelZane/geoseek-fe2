import axiosWithAuth from   '../utils/axiosWithAuth'
import axios from 'axios'


  
export const CREATE_GEM_START = 'CREATE_GEM_START';
export const CREATE_GEM_SUCCESS = 'CREATE_GEM_SUCCESS';
export const CREATE_GEM_FAIL = 'CREATE_GEM_FAIL';

// export const POST_GEM_START = 'POST_GEM_START';
// export const POST_GEM_SUCCESS = 'POST_GEM_SUCCESS';
// export const POST_GEM_FAIL = 'POST_GEM_FAIL';

export const postGem = newGem => dispatch => {
    dispatch({ type: CREATE_GEM_START });
    axiosWithAuth()
    .post(`/api/gems`, newGem)
    .then(response => {
      console.log(response)
      dispatch({ type: CREATE_GEM_SUCCESS, payload: newGem });
      })

    .catch(error => {
      
        dispatch({ type: CREATE_GEM_FAIL, payload: error.response });
      });
  };


export const GEOCODING_START = 'GEOCODING_START'
export const GEOCODING_SUCCESS = 'GEOCODING_SUCCESS'
export const GEOCODING_FAILURE = 'GEOCODING_FAILURE'

// export const geoCodingActions = coordinates => dispatch{
//   .get()
//   dispatch
// }
 


  