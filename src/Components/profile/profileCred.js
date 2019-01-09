import React, {Component} from 'react';
import experience from "../../common/experience";
import education from "../../common/education";
import Moment from 'react-moment'

class ProfileCred extends Component {
    render() {
        const {experience , education} = this.props.profile
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-center text-info">Experience</h3>
                        <ul className="list-group">
                            {experience ? experience.map((item , index)=>
                                <li key={index} className="list-group-item">
                                <h4>{item.company}</h4>
                                    <p><Moment  format = "YYYY/MM/DD">{item.from}</Moment>-
                                    {item.current ? "Now" : <Moment format = "YYYY/MM/DD">{item.to}</Moment>}</p>
                                <p>
                                    <strong>Position:</strong> {item.title}
                                </p>
                                <p>
                                    <strong>Description:</strong> {item.description}</p>
                            </li>) : <h1>No experience registered.</h1>}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center text-info">Education</h3>
                        <ul className="list-group">
                            {education ? education.map((item , index)=> <li key={index} className="list-group-item">
                                <h4>{item.school}</h4>
                                <p><Moment format="YYYY/MM/DD">{item.from}</Moment> -
                                    {item.current ? "NOW" : <Moment format = "YYYY/MM/DD">{item.to}</Moment>}
                                </p>
                                <p><strong>Degree: </strong>{item.degree}</p>
                                <p>
                                    <strong>Field Of Study: </strong>{item.fieldofstudy}</p>
                                    <p>
                                        <strong>Description:</strong>{item.description}</p>
                            </li>): <h1>No education recorded.</h1>}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProfileCred;