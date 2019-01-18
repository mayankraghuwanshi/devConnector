import axios from 'axios'
import {ADD_POST, DELETE_POST, GET_POSTS, GET_ERROR, POST_LOADING} from "./type";

export const insertPost = newPost=>dispatch=>{
    axios
        .post("/api/posts" , newPost)
        .then(res=>
            dispatch({
            type  : ADD_POST,
            payload : res.data
    }))
        .catch(err=>
             dispatch({
            type : GET_ERROR,
            payload: err.response.data
        }))
}

export const deletePost = id=>dispatch=>{
    axios
        .delete(`/api/posts/${id}`)
        .then(res=>
            dispatch({
                type  : DELETE_POST,
                payload : id
            }))
        .catch(err=>
            dispatch({
                type : GET_ERROR,
                payload: err.response.data
            }))
}

export const getPosts = () =>dispatch=>{
    dispatch({
        type : POST_LOADING
    })
    axios
        .get("/api/posts")
        .then(res=>
            dispatch({
                type  : GET_POSTS,
                payload : res.data
            }))
        .catch(err=>
            dispatch({
                type : GET_POSTS,
                payload: {}
            }))
}

