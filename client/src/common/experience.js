import React , { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import Moment from 'react-moment'
import { deleteExperience } from "../Actions/profileAction"

class Experience extends Component {
    onDeleteClick(id){
        this.props.deleteExperience(id)
    }
    render() {
        if(Object.keys(this.props.experience).length>0){
        const experience = this.props.experience.map(exp=>(
                <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                    <td><Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                    {exp.to===null ? " Now" :<Moment  format = "DD/MM/YYYY" >{exp.to}</Moment>}</td>
                <td><button onClick = {()=>this.onDeleteClick(this , exp._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ))
        return <div>
            <h4 className="mb-2">Experience Credentials</h4>
            <table className="table">
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Years</th>
                    <th/>
                </tr>
                </thead>
                {experience}
            </table>
        </div>}else{
            return <div></div>
        }
    }
}


export default connect(null , {deleteExperience})(withRouter(Experience))