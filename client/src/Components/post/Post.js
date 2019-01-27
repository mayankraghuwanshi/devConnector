import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getPost ,deleteComment, addComment} from '../../Actions/postAction'
import Loading from "../../common/loading";
import PostItem from './postItem'
import classnames from 'classnames'
import Comments from './comments'

class Post extends Component {
    constructor(){
        super()
        this.state = {
            post: {},
            text : "",
            errors:{}
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            post : nextProps.post ,
            text : "",
            errors : nextProps.errors})
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    onClick(e){
        e.preventDefault()
        const data = {
            text : this.state.text,
            avatar: this.props.auth.user.avatar,
            name : this.props.auth.user.name
        }
        this.props.addComment(this.props.post.post._id , data)
    }
   onDeleteClick(commentId){
        this.props.deleteComment(this.props.post.post._id , commentId)
   }

    render() {
        const {errors} = this.state
        const {loading , auth } = this.props;
        const {post} = this.props.post
        let postBox , commentBox
        if(loading === true || Object.keys(post).length ===0 || post===null){
        postBox = <Loading/>
        commentBox = <Loading/>
        }
        else {
            postBox = <PostItem
            post = {post}
            funShow = {false}
            />
            commentBox = <Comments
                comments = {post.comments}
                user = {this.props.auth.user}
                delete = {this.onDeleteClick.bind(this)}
            />
        }
        return (
            <div>
                {postBox}
                <div className="post-form mb-3">
                    <div className="card card-info">
                        <div className="card-header bg-info text-white">
                            Say Somthing...
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea className={classnames("form-control form-control-lg" ,{
                                        "is-invalid" : errors.text
                                    })}
                                      onChange={this.onChange} value={this.state.text}  name = "text"     placeholder="Create a post">
                                    </textarea>
                                    {errors.text && <div className='invalid-feedback'>{errors.text}</div>}
                                </div>

                                <button onClick={this.onClick} type="submit" className="btn btn-dark">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                {commentBox}
            </div>
        );
    }
}
const matchstatetoprops = (state)=>({
        post : state.post,
        auth : state.auth,
        errors : state.errors
    })


export default connect(matchstatetoprops , {getPost ,deleteComment, addComment})(Post)