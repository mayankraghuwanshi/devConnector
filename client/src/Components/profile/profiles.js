import React, {Component} from 'react';
import {getAllProfiles} from "../../Actions/profileAction";
import {connect} from 'react-redux'
import Loading from '../../common/loading'
import ProfileItem from './profileItem'

class Profiles extends Component {
    componentDidMount() {
        this.props.getAllProfiles()
    }
    componentWillReceiveProps(nextProps) {

    }

    render()
    {
       let Profilebox
       const {profiles , loading} = this.props.profile
        if(profiles === null || loading){
            Profilebox = <Loading/>
        }
        else {
            if(profiles.length>0){
                Profilebox = profiles.map(item=>{
                    return <ProfileItem profile = {item}/>
                })
            }else{
                Profilebox = <h1>No profiles found..</h1>
            }
        }
        return (
            <div>
                {Profilebox}
            </div>
        );
    }
}
const mapstatetoprops = (state)=>({
    profile : state.profile,
})




export default connect(mapstatetoprops, {getAllProfiles})(Profiles);