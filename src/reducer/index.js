import {
  USER_SIGNING_UP,
  USER_SIGNING_UP_SUCCESS,
  USER_SIGNING_UP_FAILURE,
  USER_LOGING_IN,
  USER_LOGING_IN_SUCCESS,
  USER_LOGING_IN_FAILURE,
  START_FETCHING_DATA,
  FETCH_SUCCESS_DATA,
  FETCH_FAILURE_DATA,
  CREATE_GEM_START,
  CREATE_GEM_SUCCESS,
  CREATE_GEM_FAIL,
  COMPLETED_GEM_START,
  COMPLETED_GEM_SUCCESS,
  COMPLETED_GEM_FAIL
} from "../actions";

const initialState = {
  userData: [],
  fetchingData: false,
  error: "",
  getUserData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNING_UP:
      return {
        ...state,
        fetchingData: true
      };

    case USER_SIGNING_UP_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case USER_SIGNING_UP_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    case USER_LOGING_IN:
      return {
        ...state,
        fetchingData: true
      };

    case USER_LOGING_IN_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case USER_LOGING_IN_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    case CREATE_GEM_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };

    case CREATE_GEM_SUCCESS:
      return {
        ...state,

        isPosting: false,
        error: "",
        gemData: [...action.payload]
      };

    case CREATE_GEM_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };

    case COMPLETED_GEM_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };

    case COMPLETED_GEM_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: "",
        userData: [...action.payload]
      };

    case COMPLETED_GEM_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };

    case START_FETCHING_DATA:
      return {
        ...state,
        fetchingData: true
      };

    case FETCH_SUCCESS_DATA:
      return {
        ...state,
        fetchingData: false,
        getUserData: action.payload,
        userData: action.payload
      };

    case FETCH_FAILURE_DATA:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
