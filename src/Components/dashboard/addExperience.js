import React , {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import InputTextField from '../../common/inputTextField'
import {addExperience} from "../../Actions/profileAction";
import classnames from 'classnames'

class  AddExperience extends Component{
    constructor(props){
        super(props)
        this.state =  {
            title : "",
            company : "",
            location  : "",
            from : "",
            to : "",
            description : "",
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
        const newExp = {
            title : this.state.title,
            company : this.state.company,
            location  : this.state.location,
            from : this.state.from,
            to : this.state.to,
            description : this.state.description,
            current : this.state.current
        }
        this.props.addExperience(newExp , this.props.history)

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

        return(<div className="section add-experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Your Experience</h1>
                            <p className="lead text-center">Add any developer/programming positions that you have had in
                                the past</p>
                            <small className="d-block pb-3">* = required field</small>
                            <form onSubmit={this.onSubmit}>
                                <InputTextField
                                placeholder="* Job Title"
                                name = "title"
                                type = "text"
                                onChange={this.onChange}
                                error = {errors.title}/>
                            <InputTextField
                                placeholder="* Company"
                                name = "company"
                                type = "text"
                                onChange={this.onChange}
                                error = {errors.company}/>
                            <InputTextField
                                placeholder="Location"
                                name = "location"
                                type = "text"
                                onChange={this.onChange}
                                error = {errors.location}/>
                            <h6>From Date</h6>
                                <div className="form-group">
                                    <input onChange={this.onChange}  type="date" className={classnames("form-control form-control-lg",{
                                       'is-invalid' : errors.from
                                    })} name="from"/>
                                </div>
                            <h6>To Date</h6>
                                <div className="form-group">
                                    {fillb}
                                </div>
                            <div className="form-check mb-4">
                                    <input className="form-check-input" type="checkbox" name="current" value=""
                                   onChange={this.onCheck}        id="current"/>
                                    <label className="form-check-label" htmlFor="current">
                                        Current Job
                                    </label>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Job Description"
                                              name="description"></textarea>
                                    <small className="form-text text-muted">Some of your responsabilities, etc</small>
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
const mapstatetoprops =(state)=>{
     return{
         errors : state.errors
     }
}


export default connect(mapstatetoprops , {addExperience})(AddExperience)