import{
        GEOCODING_START,
        GEOCODING_SUCCESS,
        GEOCODING_FAILURE

} from "../actions/index copy"

  
  export const initialState = {
  
    isfetching: false,
    error: '',
    coordinates: {}
  }
  
export const geoCodingReducer = (state = initialState, action) =>{
    switch(action.type){
        case GEOCODING_START:
            return{
                ...state,
                isfetching: true
            }
        case GEOCODING_SUCCESS:
            return{
                ...state,
            coordinates: action.payload,
            }
        case GEOCODING_FAILURE:
            return{
                ...state, 
                error: action.payload

            }

        default: return state
    }
}