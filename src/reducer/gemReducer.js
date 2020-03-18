import {
  CREATE_GEM_START,
  CREATE_GEM_SUCCESS,
  CREATE_GEM_FAIL
} from "../actions";

export const initialState = {
  isfetching: false,
  error: ""
};

export const gemReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GEM_START:
      return {
        ...state,
        isfetching: true
      };
    case CREATE_GEM_SUCCESS:
      return {
        ...state,
        newGem: action.payload
      };
    case CREATE_GEM_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
