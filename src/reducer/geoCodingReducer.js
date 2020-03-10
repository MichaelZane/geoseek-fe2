import{
        GEOCODING_START,
        GEOCODING_SUCCESS,
        GEOCODING_FAILURE,

     COORDINATE_VALUES,
     CREATE_GEM_START

} from "../actions/index copy"

  
  export const initialState = {
  
    isfetching: false,
    error: '',
    longitude: '',
    latitude:  '',
    title: '',
    difficulty: '',
    description: ''
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
            longitude: action.payload.x,
            latitude: action.payload.y
            }
        
            case CREATE_GEM_START:
                return{
                    ...state,
            

                }


        case GEOCODING_FAILURE:
            return{
                ...state, 
                error: action.payload
            }

        default: return state
    }
}