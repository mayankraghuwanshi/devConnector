import axios from 'axios'
import {CLEAR_PROFILE, GET_ERROR, GET_PROFILE , GET_PROFILES , PROFILE_LOADING, SET_CURRENT_USER} from "./type";
import setAuthHeader from "../utils/setAuthHeader";

export const addEducation =  (newEdu , history)=>dispatch=>{
    axios
        .post("/api/profile/education" , newEdu)
        .then(data=>history.push('/dashboard'))
        .catch(err=>dispatch({
            type:GET_ERROR,
            payload : err.response.data
        }))
}


export const deleteEducation =  (eduId , history)=>dispatch=>{
    dispatch({
        type : PROFILE_LOADING
    })
    axios
        .delete(`/api/profile/education/${eduId}` , eduId)
        .then(res=>dispatch({
            type : GET_PROFILE,
            payload : res.data
        }))
        .catch(err=>dispatch({
            type:GET_ERROR,
            payload : err.response.data
        }))
}


export const addExperience =  (newExp , history)=>dispatch=>{
    axios
        .post("/api/profile/experience" , newExp)
        .then(data=>history.push('/dashboard'))
        .catch(err=>dispatch({
            type:GET_ERROR,
            payload : err.response.data
        }))
}

export const deleteExperience =  (expId , history)=>dispatch=>{
    axios
        .delete(`/api/profile/experience/${expId}` , expId)
        .then(res=>dispatch({
            type : GET_PROFILE,
            payload : res.data
        }))
        .catch(err=>dispatch({
            type:GET_ERROR,
            payload : err.response.data
        }))
}




export const getCurrentProfile = ()=>dispatch=>{
    dispatch({
        type : PROFILE_LOADING
    })
    axios.get('/api/profile')
        .then(res=>dispatch({
            type: GET_PROFILE,
            payload : res.data
        }))
        .catch(err=>dispatch({
            type : GET_PROFILE,
            payload: {}
        }))
}

export const getAllProfiles = ()=>dispatch=>{
    dispatch({
        type : PROFILE_LOADING
    })
    axios.get('/api/profile/all')
        .then(res=>dispatch({
            type: GET_PROFILES,
            payload : res.data
        }))
        .catch(err=>dispatch({
            type : GET_PROFILES,
            payload: {}
        }))
}

export const getProfileByHandle = (handle)=>dispatch=>{
    dispatch({
        type : PROFILE_LOADING
    })
    axios.get(`/api/profile/handle/${handle}`)
        .then(res=>dispatch({
            type: GET_PROFILE,
            payload : res.data
        }))
        .catch(err=>dispatch({
            type : GET_PROFILE,
            payload: null
        }))
}

export const getProfileByUserId = (userId)=>dispatch=>{
    dispatch({
        type : PROFILE_LOADING
    })
    axios.get(`/api/profile/user/${userId}`)
        .then(res=>dispatch({
            type: GET_PROFILE,
            payload : res.data
        }))
        .catch(err=>dispatch({
            type : GET_PROFILE,
            payload: null
        }))
}




export const createProfile = (newData , history)=>dispatch=>{
    axios.post('/api/profile' , newData)
        .then(res=>history.push('/dashboard') )
        .catch(err=>dispatch({
            type: GET_ERROR,
            payload : err.response.data}))
}

export const deleteProfile = (history)=>dispatch=>{
    if(window.confirm("You want to delete your profile ?")){
    axios.delete('/api/profile')
        .then(res=>dispatch({
            type : SET_CURRENT_USER,
            payload :{}
        }))
        .catch(err=>dispatch({
            type: GET_ERROR,
            payload : err.response.data}))}
}


export function clearProfile() {
    return {
        type : CLEAR_PROFILE
    }
}