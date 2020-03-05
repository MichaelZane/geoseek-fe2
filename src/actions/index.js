import axiosWithAuth from   "../utils/axiosWithAuth"

export const USER_SIGNING_UP = "USER_SIGNING_UP";
export const USER_SIGNING_UP_SUCCESS = "USER_SIGNING_UP_SUCCESS";
export const USER_SIGNING_UP_FAILURE = "USER_SIGNING_UP_FAILURE";
export const signUp = signUpData => dispatch => {
    dispatch({ type: USER_SIGNING_UP });
    axiosWithAuth()
    .post(`/api/users/register`, signUpData)
    .then(response =>
        dispatch(
          { type: USER_SIGNING_UP_SUCCESS, payload: response.data.user },
          localStorage.setItem("token", response.data.token)
        )
      )
      .catch(error =>
        dispatch({ type: USER_SIGNING_UP_FAILURE, payload: error.response })
      );
  };

export const USER_LOGING_IN = "USER_LOGING_IN";
export const USER_LOGING_IN_SUCCESS = "USER_LOGING_IN_SUCCESS";
export const USER_LOGING_IN_FAILURE = "USER_LOGING_IN_FAILURE";
export const login = loginData => dispatch => {
    dispatch({ type: USER_LOGING_IN });
    axiosWithAuth()
    .post(`/api/users/login`, loginData)
    .then(response =>
        dispatch(
          { type: USER_LOGING_IN_SUCCESS, payload: response.data.user },
          localStorage.setItem("token", response.data.token),
//******************/set a history************************************************
        )
      )
    .catch(error => {
        dispatch({ type: USER_LOGING_IN_FAILURE, payload: error.response });
      });
  };

export const START_FETCHING_DATA = "START_FETCHING_DATA";
export const FETCH_SUCCESS_DATA = "FETCH_SUCCESS_DATA";
export const FETCH_FAILURE_DATA = "FETCH_FAILURE_DATA";
export const fetchingUserData = () => dispatch => {
    dispatch({type: START_FETCHING_DATA})
    axiosWithAuth()
    .get(`/api/users/`)
    .then(response => 
        dispatch(
            { type: FETCH_SUCCESS_DATA, payload: response.data }
            )
        )
    .catch(error => 
        dispatch({ type: FETCH_FAILURE_DATA, payload: error.response }))
  }
  
export const CREATE_GEM_START = "CREATE_GEM_START";
export const CREATE_GEM_SUCCESS = "CREATE_GEM_SUCCESS";
export const CREATE_GEM_FAIL = "CREATE_GEM_FAIL";
export const createGem = newGem => dispatch => {
    dispatch({ type: CREATE_GEM_START });
    axiosWithAuth()
    .post(`/api/gems`, newGem)
    .then(response => {
        dispatch({ type: CREATE_GEM_SUCCESS, payload: response.data });
      })
    .catch(error => {
        dispatch({ type: CREATE_GEM_FAIL, payload: error.response });
      });
  };

  export const COMPLETED_GEM_START = "COMPLETED_GEM_START";
  export const COMPLETED_GEM_SUCCESS = "COMPLETED_GEM_SUCCESS";
  export const COMPLETED_GEM_FAIL = "COMPLETED_GEM_FAIL";
  export const completedGem = completeGem => dispatch => {
      dispatch({ type: COMPLETED_GEM_START });
      axiosWithAuth()
      .get(`/api/completed`, completeGem)
      .then(response => {
          dispatch({ type: COMPLETED_GEM_SUCCESS, payload: response.data });
        })
      .catch(error => {
          dispatch({ type: COMPLETED_GEM_FAIL, payload: error.response });
        });
    };
  

  