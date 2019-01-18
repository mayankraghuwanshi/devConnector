import React , {Component} from 'react'
import {Link} from "react-router-dom";
import {connect } from 'react-redux'
import { deletePost } from '../../Actions/postAction'
class PostItem  extends Component {
    constructor(){
        super()
    }
    onDeleteClick(id){
        this.props.deletePost(id)
    }
    render(){
    const {user , post , onDelete} =  this.props
   return <div key={post._id} className="card card-body mb-3">
           <div className="row">
               <div className="col-md-2">
                   <Link to={`/post/:${post._id}`}>
                       <img className="rounded-circle d-none d-md-block"
                            src={post.avatar}
                            alt="" title="You must have a Gravatar connected to your email to display an image"/>
                   </Link>
                   <br/>
                   <p className="text-center">{post.name}</p>
               </div>
               <div className="col-md-10">
                   <p className="lead">{post.text}</p>
                   <button type="button" className="btn btn-light mr-1">
                       <i className="text-info fas fa-thumbs-up"></i>
                       <span className="badge badge-light">{post.likes.length}</span>
                   </button>
                   <button type="button" className="btn btn-light mr-1">
                       <i className="text-secondary fas fa-thumbs-down"></i>
                   </button>
                   <Link to={`/post/:${post._id}`} className="btn btn-info mr-1">
                       {post.comments.length} Comments
                   </Link>
                   {(post.user === user.id) ? <button onClick={this.onDeleteClick.bind(this ,post._id)} type="button" className="btn btn-danger mr-1">
                       <i className="fas fa-times"/>
                   </button> : null}
               </div>
           </div>
       </div>

}}

export default connect(null,{deletePost})(PostItem)