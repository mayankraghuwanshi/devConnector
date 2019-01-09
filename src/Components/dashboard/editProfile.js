import React, {Component} from 'react'
import InputTextField from '../../common/inputTextField'
import OptionList from '../../common/optionList'
import {connect} from "react-redux"
import classnames from 'classnames'
import {withRouter} from "react-router-dom";
import {createProfile , getCurrentProfile} from "../../Actions/profileAction";

class editProfile extends Component {
    constructor(props){
        super(props);
        this.state ={
            socialInput : false,
            handle : "",
            company : "",
            status : "",
            website : "" ,
            location : "",
            skills : "",
            twitter:"",
            facebook : "",
            bio : "" ,
            linkedin : " ",
            youtube : "",
            instagram : "",
            githubusername : "",
            errors : {}

        }
        this.onChange = this.onChange.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        const newData = {
            handle:this.state.handle,
            company:this.state.company,
            status:this.state.status,
            website:this.state.website,
            location:this.state.location,
            skills:this.state.skills,
            twitter:this.state.twitter,
            facebook:this.state.facebook,
            instagram:this.state.instagram,
            githubusername:this.state.githubusername,
            youtube : this.state.youtube,
            linkedin : this.state.linkedin,
            bio:this.state.bio}
        this.props.createProfile(newData , this.props.history)

    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
   componentDidMount() {
        this.props.getCurrentProfile()
   }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors : nextProps.errors})
        }
        if(nextProps.profile.profile){
           const {profile} = nextProps.profile
            profile.skills = profile.skills.join(",")
            this.setState({
               handle : profile.handle,
               company : profile.company,
               bio : profile.bio,
               status : profile.status,
               website : profile.website,
               location : profile.location,
               twitter : profile.twitter,
               facebook : profile.facebook,
               linkedin : profile.linkedin,
               instagram : profile.instagram,
               githubusername : profile.githubusername,
               youtube : profile.youtube,
               skills:profile.skills
           })

        }
    }

    render()
    {
        let SocialBox = this.state.socialInput
        const box =
            <div><OptionList
                linkName="fab fa-youtube"
                type = "text"
                name = "youtube"
                value={this.state.youtube}
                onChange = {this.onChange}
                errors = {this.state.errors.youtube}
                placeholder="YouTube Channel URL"/>
                <OptionList
                    linkName="fab fa-linkedin"
                    name = "fab fa-linkedin"
                    type = "text"
                    value={this.state.linkedin}
                    onChange = {this.onChange}
                    placeholder="Linkedin URL"/>
                <OptionList
                    linkName="fab fa-facebook"
                    name = "facebook"
                    type = "text"
                    value={this.state.facebook}
                    onChange = {this.onChange}
                    placeholder="Facebook URL"/>
                <OptionList
                    linkName="fab fa-instagram"
                    name = "instagram"
                    type = "text"
                    value={this.state.instagram}
                    onChange = {this.onChange}
                    placeholder="Instargram URL"/></div>
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <a href="/dashboard" className="btn btn-light">
                                Go Back
                            </a>
                            <h1 className="display-4 text-center">Create Your Profile</h1>
                            <p className="lead text-center">Let's get some information to make your profile stand
                                out</p>
                            <small className="d-block pb-3">* = required field</small>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <InputTextField
                                    placeholder="Profile Handler"
                                    name = "handle"
                                    type = "text"
                                    onChange={this.onChange}
                                    value={this.state.handle}
                                    error = {this.state.errors.handle}
                                    info = "A unique handle for your profile URL. Your
                                         full name, company name, nickname, etc (This CAN'T be changed later)"
                                />
                                <div className="form-group">
                                    <select className={ classnames("form-control form-control-lg" ,{
                                        "is-invalid" : this.state.errors.status} )} name="status" onChange={this.onChange}
                                            value={this.state.status}
                                    >
                                        <option value="0">* Select Professional Status</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Junior Developer">Junior Developer</option>
                                        <option value="Senior Developer">Senior Developer</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Student or Learning">Student or Learning</option>
                                        <option value="Instructor">Instructor or Teacher</option>
                                        <option value="Intern">Intern</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="invalid-feedback">{this.state.errors.status}</div>
                                    <small className="form-text text-muted">Give us an idea of where you are at in your
                                        career
                                    </small>
                                </div>
                                <InputTextField
                                    type="text"
                                    placeholder="company"
                                    name = "company"
                                    onChange={this.onChange}
                                    value = {this.state.company}
                                    error = {this.state.errors.company}
                                    info = "Could be your own company or one you work for"
                                />
                                <InputTextField
                                    placeholder="Website"
                                    type = "text"
                                    name = "website"
                                    onChange={this.onChange}
                                    value = {this.state.website}
                                    error = {this.state.errors.website}
                                    info= "Could be your own or a company website"
                                />
                                <InputTextField
                                    placeholder="Location"
                                    type = "text"
                                    name = "location"
                                    onChange={this.onChange}
                                    value = {this.state.location}
                                    error = {this.state.errors.location}
                                    info= "City & state suggested (eg. Boston, MA)"
                                />
                                <InputTextField
                                    placeholder="Skills"
                                    type = "text"
                                    name = "skills"
                                    onChange={this.onChange}
                                    value = {this.state.skills}
                                    error = {this.state.errors.skills}
                                    info= "Please use comma separated values (eg.
                                         HTML,CSS,JavaScript,PHP)"
                                />
                                <InputTextField
                                    placeholder="Github Username"
                                    type = "text"
                                    name = "githubusername"
                                    onChange={this.onChange}
                                    value = {this.state.githubusername}
                                    error = {this.state.errors.githubusername}
                                    info= "If you want your latest repos and a Github
                                         link, include your username"
                                />
                                <div className="form-group">
                                     <textarea
                                         className="form-control form-control-lg"
                                         placeholder="A short bio of yourself"
                                         name="bio"
                                         value={this.state.bio}
                                         onChange={this.onChange}
                                     >
                                     </textarea>
                                    <small className="form-text text-muted">Tell us a little about yourself</small>
                                </div>
                                <div className="mb-3" >
                                    <button onClick={()=>{
                                        this.setState(prevState =>({
                                            socialInput : !prevState.socialInput
                                        }))
                                    }} type="button" className="btn btn-light">Add Social Network Links</button>
                                    <span className="text-muted">Optional</span>
                                </div>
                                {SocialBox ? box : <div></div>}
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const  mapStateToProps = (state)=>({
    errors : state.errors,
    profile : state.profile
})

export default connect( mapStateToProps , {createProfile , getCurrentProfile})(withRouter(editProfile))