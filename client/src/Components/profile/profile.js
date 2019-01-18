import React, {Component} from 'react';
import {getProfileByHandle} from '../../Actions/profileAction'
import {connect} from 'react-redux'
import PrifileHeader from './profileHeader'
import Loading from "../../common/loading";
import ProfileAbout from "./profileAbout";
import ProfileCred from "./profileCred";


class Profile extends Component {
    componentDidMount() {
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle)
        }
    }
    render() {
        let ProfileHeaderBox , ProfileAboutBox, ProfileCredBox
        const {profile , loading} = this.props.profile
        if(profile === null || loading){
            ProfileHeaderBox = <Loading/>
        }
        else{
           ProfileHeaderBox = <PrifileHeader profile = {profile}/>
           ProfileAboutBox = <ProfileAbout profile = {profile}/>
            ProfileCredBox = <ProfileCred profile = {profile}/>
        }
        return (
            <div>
                <div class="profile">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-6">
                                        <a href="/profiles" class="btn btn-light mb-3 float-left">Back To Profiles</a>
                                    </div>
                                    <div class="col-6">

                                    </div>
                                </div>
                                {ProfileHeaderBox}
                                {ProfileAboutBox }
                                {ProfileCredBox  }

                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
const mapstatetoprops = (state)=>({
    profile : state.profile
})

export default connect(mapstatetoprops,{getProfileByHandle})(Profile);