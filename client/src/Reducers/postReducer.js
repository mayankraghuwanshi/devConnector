import {GET_POST ,DELETE_POST, GET_POSTS, GET_ERROR , POST_LOADING} from "../Actions/type";

const initialState = {
    posts : [],
    post : {},
    loading : false
}

export default function (state = initialState , action){
    switch (action.type){
        case "ADD_POST":
            return{
                ...state,
                posts : [action.payload , ...state.posts],
                loading : false
            }
        case "GET_POSTS":
            return{
                ...state,
                posts :action.payload ,
                loading : false
            }
        case "POST_LOADING":
            return {
                ...state,
                loading : true
           }
        case "DELETE_POST":
            return {
                ...state,
                posts : state.posts.filter(post=> post._id !== action.payload)
            }
        case "GET_POST":
            return{
                ...state,
                loading : false,
                post : action.payload
            }

        default :
            return state
    }


}