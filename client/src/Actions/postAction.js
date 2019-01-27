import axios from 'axios'
import {ADD_POST, DELETE_POST, GET_POSTS,GET_POST, GET_ERROR, POST_LOADING} from "./type";

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

export const unlikePost = id =>dispatch=>{

    axios
        .post(`/api/posts/unlike/${id}`)
        .then(res=>
            dispatch(
                getPosts()
            ))
        .catch(err=>{
            dispatch({
                type : GET_ERROR,
                payload: err.response.data
            })})
}


export const likePost = id =>dispatch=>{
    axios
        .post(`/api/posts/like/${id}`)
        .then(res=>
            dispatch(
                getPosts()
            ))
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

export const getPost = (id) =>dispatch=>{
    dispatch({
        type : POST_LOADING
    })
    axios
        .get(`/api/posts/${id}`)
        .then(res=>
            dispatch({
                type  : GET_POST,
                payload : res.data
            }))
        .catch(err=>
            dispatch({
                type : GET_POST,
                payload: {}
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

export const addComment = (postId , commentData) =>dispatch=>{
    axios
        .post(`/api/posts/comment/${postId}` , commentData)
        .then(res=>
            dispatch({
                type  : GET_POST,
                payload : res.data
            }))
        .catch(err=>
            dispatch({
                type : GET_ERROR,
                payload: err.response.data
            }))
}

export const deleteComment = (postId , commeniId) =>dispatch=>{
    axios
        .delete(`/api/posts/comment/${postId}/${commeniId}`)
        .then(res=>
            dispatch({
                type  : GET_POST,
                payload : res.data
            }))
        .catch(err=>
            dispatch({
                type : GET_ERROR,
                payload: err.response.data
            }))
}
