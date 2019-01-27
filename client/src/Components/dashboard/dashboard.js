import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCurrentProfile , deleteProfile} from "../../Actions/profileAction";
import {Link} from "react-router-dom";
import Loading from '../../common/loading'
import Experience from '../../common/experience'
import Education from '../../common/education'
import {withRouter} from "react-router-dom";

class Dashboard extends Component{
    componentDidMount() {
        this.props.getCurrentProfile()
    }
    onDeleteClick(){
        this.props.deleteProfile(this.props.history)
    }
    render(){
        const {user} = this.props.auth
        let content
        const {profile , loading} = this.props.profile
        if(profile === null || loading === true){
            content = <div className="dashboard"><Loading/></div>
        }
        else{
            if(Object.keys(profile).length>0){
                content = <div><p className="lead text-muted">Welcome <Link to={`/profile/user/${user.id}`}>{user.name}</Link></p>
                    <div className="btn-group mb-4" role="group">
                        <Link to="/edit-profile" className="btn btn-light">
                            <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile</Link>
                        <Link to="/add-experience" className="btn btn-light">
                            <i className="fab fa-black-tie text-info mr-1"></i>
                            Add Experience</Link>
                        <Link to="/add-education" className="btn btn-light">
                            <i className="fas fa-graduation-cap text-info mr-1"></i>
                            Add Education</Link>
                    </div>
                    <Experience  experience = {profile.experience}/>
                    <Education  education = {profile.education}/>
                    <div onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete Account</div>
                </div>
            }
            if(Object.keys(profile).length===0){
                content = <div><p className="lead text-muted">
                    welcome {user.name}</p>
                    <p>You have not yet setup a profile , Please setup a Profile</p>
                    <Link to='/create-profile' className="btn btn-lg btn-info">Create Profile</Link>
               </div>
            }
        }

        return (<div className="dashboard box">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4">Dashboard</h1>
                {content}
                    </div></div>
            </div></div>
        )
    }
}
const mapStateToProps =(state)=>({
    profile : state.profile,
    loading : state.loading,
    auth : state.auth
    })

export default connect(mapStateToProps , { getCurrentProfile , deleteProfile} )(withRouter(Dashboard))