import React , {Component} from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../Actions/postAction'
import { insertPost , deletePost } from '../../Actions/postAction'
import InputTextField from '../../common/inputTextField'
import PostItem from './postItem'
import Loading from "../../common/loading";

class Feed extends Component{
    constructor(){
        super()
        this.state = {
            text : "",
            errors : {},
            html : ""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)

    }
    onSubmit(e){
        const {user} = this.props.auth
        e.preventDefault()
        if(!this.props.auth.isAuthenticated){
            this.setState({html : <div className="alert alert-danger"> Please Login First</div>})
        }
        else {
            const newPost = {
                text: this.state.text,
                name: user.name,
                avatar: user.avatar
            }
            this.props.insertPost(newPost)
            this.setState({text: ""})
        }
    }

    componentDidMount() {
        this.props.getPosts()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({ errors : nextProps.errors })
        }
    }

    onChange(e){

        this.setState({[e.target.name] : e.target.value})
    }
    render() {
        const {auth , post} = this.props
        if(post===null || post.loading){
            return <div><Loading/></div>
        }else{
            let postBox = post.posts.map(item =><PostItem
                post = {item}
                user = {auth.user}
                funShow ={true}
                />
            )
            return <div>
            {this.state.html}
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="post-form mb-3">
                                <div className="card card-info">
                                    <div className="card-header bg-info text-white">
                                        Say Somthing...
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.onSubmit}>
                                            <InputTextField
                                            name = "text"
                                            value={this.state.text}
                                            error = {this.state.errors.text}
                                            onChange={this.onChange}
                                            type="textarea"
                                            />
                                            <button type="submit" className="btn btn-dark">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {postBox}
                            </div></div></div></div></div>
    }}
}
const mapstatetoprops = (state) =>({
    auth : state.auth,
    errors : state.errors,
    post : state.post
})

export default connect(mapstatetoprops , {getPosts , deletePost, insertPost})(Feed)