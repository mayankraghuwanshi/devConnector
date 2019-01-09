import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class ProfileItem extends Component {
    render() {
        let SkillsBox = this.props.profile.skills.map((item)=>{
            return <li className="list-group-item">
                <i className="fa fa-check pr-1"></i>{item}
            </li>
        })


        return (
            <div>
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <img className="rounded-circle"
                                 src={this.props.profile.user.avatar} alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{this.props.profile.user.name}</h3>
                            <p>{this.props.profile.handle}</p>
                            <p>{this.props.profile.company}</p>
                            <Link to={`/profile/${this.props.profile.handle}`} className="btn btn-info">View Profile</Link>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <h4>Skill Set</h4>
                            <ul className="list-group">
                                {SkillsBox}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileItem;