import { combineReducers } from 'redux'
import errReducer from "./errReducer";
import authReducer from './authReducer'
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";
export default combineReducers({
    errors : errReducer,
    auth : authReducer,
    profile : profileReducer,
    post : postReducer
})