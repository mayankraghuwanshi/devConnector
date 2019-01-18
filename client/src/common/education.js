import React , { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import Moment from 'react-moment'
import { deleteEducation } from "../Actions/profileAction"

class Education extends Component {
    onDeleteClick(id) {
        this.props.deleteEducation(id)
    }

    render() {
        if (Object.keys(this.props.education).length > 0) {
            const education = this.props.education.map(exp => (
                <tr key={exp._id}>
                    <td>{exp.school}</td>
                    <td>{exp.degree}</td>
                    <td><Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                        {exp.to === null ? " Now" : <Moment format="DD/MM/YYYY">{exp.to}</Moment>}</td>
                    <td>
                        <button onClick={() => this.onDeleteClick(this, exp._id)} className="btn btn-danger">Delete
                        </button>
                    </td>
                </tr>
            ))
            return <div>
                <h4 className="mb-2">Education Credentials</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th/>
                    </tr>
                    </thead>
                    {education}
                </table>
            </div>
        }
        else{
            return <div></div>
        }
    }

}

export default connect(null , {deleteEducation})(withRouter(Education))