import React from 'react'
import Link from 'react-router-dom'
const Comments =(props)=>{
    const {comments , user} = props
    if(comments.length>0){
    return comments.map((data , index)=>(
        <div key={index} className="card card-body mb-3">
            <div className="row">
                <div className="col-md-2">
                    <a href="profile.html">
                        <img className="rounded-circle d-none d-md-block"
                             src={data.avatar} alt=""/>
                    </a>
                    <br/>
                    <p className="text-center">{data.name}</p>
                </div>
                <div className="col-md-10">
                    <p className="lead">{data.text}</p>
                    {(data.user === user.id) ? <button onClick={()=>props.delete(data._id)} type="button" className="btn btn-danger mr-1">
                        <i className="fas fa-times"/>
                    </button> : null}
                </div>
            </div>
        </div>
    ))}
    else{
        return null
    }
}
export default Comments