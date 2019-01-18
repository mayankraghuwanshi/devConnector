import React , {Component} from 'react'
import {connect} from "react-redux"
import InputTextField from '../../common/inputTextField'
import {Link} from 'react-router-dom'
import {addEducation} from '../../Actions/profileAction'
import classnames from 'classnames'

class addEdication extends Component{
    constructor(props){
        super(props)
        this.state =
        {
            school : "",
            degree : "",
            fieldofstudy  : "",
            from : "",
            to : "",
            description :"",
            current : false,
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onCheck = this.onCheck.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const newEdu = {
            school : this.state.school,
            degree : this.state.degree,
            fieldofstudy  : this.state.fieldofstudy,
            from : this.state.from,
            to : this.state.to,
            description : this.state.description,
            current : this.state.current
        }
        this.props.addEducation(newEdu , this.props.history)

    }
    onCheck(e){
     const flag= this.state.current
        this.setState({current : !flag})
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors : nextProps.errors})
        }
    }

    render() {
        let fillb
   const {errors} = this.props
   const {current} = this.state
   current ? fillb= <input onChange={this.onChange} type="date" className="form-control form-control-lg" name="to"  disabled/> :
             fillb = <input onChange={this.onChange} type="date" className="form-control form-control-lg" name="to" />


        return (
            <div className="add-education">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Your Education</h1>
                            <p className="lead text-center">Add any school, bootcamp, etc that you have attended</p>
                            <small className="d-block pb-3">* = required field</small>
                            <form onSubmit={this.onSubmit} >
                                <InputTextField
                                placeholder = "* School of Bootcamp"
                                name = "school"
                                type = "text"
                                onChange={this.onChange}
                                error = {errors.school}/>
                                <InputTextField
                                placeholder = "* Degree Or Certificate"
                                name = "degree"
                                type = "text"
                                onChange={this.onChange}
                                error = {errors.degree}/>
                                <InputTextField
                                placeholder = "* Field Of Study"
                                name = "fieldofstudy"
                                type = "text"
                                onChange={this.onChange}
                                error = {errors.fieldofstudy}/>
                            <h6>From Date</h6>
                                <div className="form-group">
                                    <input onChange={this.onChange} type="date" className={classnames("form-control form-control-lg" , {
                                        "is-invalid" : errors.from
                                    })} name="from"/>
                                </div>
                            <h6>To Date</h6>
                                <div className="form-group">
                                    {fillb}
                                </div>
                                <div className="form-check mb-4">
                                    <input  onClick= {this.onCheck} className="form-check-input" type="checkbox" name="current" value=""
                                           id="current"/>
                                    <label className="form-check-label" htmlFor="current">
                                        Current Job
                                    </label>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Program Description"
                                       onChange={this.onChange}       name="description"></textarea>
                                    <small className="form-text text-muted">Tell us about your experience and what you
                                        learned
                                    </small>
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapstatetoprop = (state)=>({
    errors : state.errors
})
export default  connect(mapstatetoprop , {addEducation})(addEdication)