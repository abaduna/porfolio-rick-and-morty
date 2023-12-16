import {FETCH_DATA} from "../actions/fetch"

export const initialState = {
    loading:true,
    error:false,
    data:{},
    page:1
}
export const fetchReducer = (state,action)=>{
   switch (action.type) {
    case FETCH_DATA.SET_DATA:
        return{
            
            loading:false,
            error:false,
            data: {
                info:action.payload.info,
                results:action.payload.results,
            }
        }
        break;
        case FETCH_DATA.SET_ERROR:
            return{
                ...initialState,
                loading:false,
                error:true,
                
            }
            break;
       
    default:
        return state
   }
}