import {GET_ERROR, SET_CURRENT_USER} from './type'
import axios from 'axios'
import setAuthHeader from '../utils/setAuthHeader'
import jwt_decode from 'jwt-decode'
import {clearProfile} from "./profileAction";

export const registerUser = (userData)=>(dispatch)=>{
    axios.post('/api/users/register', userData)
        .then(data=>{
            window.location.href='/login'
        })
        .catch(err=>
        dispatch({
            type : GET_ERROR,
            payload : err.response.data
        }))
}

export const loginUser = userData => dispatch=>{
    axios.post('/api/users/login' , userData)
        .then(res=>{

            //set to variable
            //const token = res.data.token
            const {token} = res.data
            //set to localstorage
            localStorage.setItem("jwtToken" , token)
            //set to authHeader
            setAuthHeader(token)
            //decode to get user
            const decoded = jwt_decode(token)
            //set current user
            dispatch(setCurrentUser(decoded))
        }).catch(err=>
            dispatch({
                type : GET_ERROR,
                payload : err.response.data
            })
    )
}
export const logoutUser=()=>dispach=>{
    localStorage.removeItem('jwtToken')
    setAuthHeader(false)
    dispach(setAuthHeader({}))
    dispach(clearProfile())
    window.location.href = "/login"

}

export const setCurrentUser=(decoded)=>{
    return{
        type: SET_CURRENT_USER,
        payload : decoded
    }
}