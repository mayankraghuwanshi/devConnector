import {CLEAR_PROFILE, GET_PROFILE, PROFILE_LOADING} from "../Actions/type";

const initialstate = {
    profile : null,
    loading : false,
    profiles : null
}

export default function(state = initialstate ,action ){
    switch (action.type) {
        case PROFILE_LOADING:
            return{
                ...state,
                loading: true,
            }
        case GET_PROFILE:
            return{
                ...state,
                profile: action.payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return{
                ...state,
                profile : null
            }
        default :
            return state
    }
}