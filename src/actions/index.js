import axiosWithAuth from '../utils/axiosWithAuth'

export const CREATE_GEM_START = 'CREATE_GEM_START';
export const CREATE_GEM_SUCCESS = 'CREATE_GEM_SUCCESS';
export const CREATE_GEM_FAIL = 'CREATE_GEM_FAIL';


export const postGem = newGem => dispatch => {
  dispatch({type: CREATE_GEM_START});
  axiosWithAuth()
    .post(`/api/gems/`, newGem)
    .then(response => {
      console.log(response)
      dispatch({type: CREATE_GEM_SUCCESS, payload: newGem});
    })

    .catch(error => {
      console.log("*****Gem Posting error*****", error)
      dispatch({type: CREATE_GEM_FAIL, payload: error.response});
    });
};
