import React, {Component} from 'react'
import {loginUser} from "../../Actions/authAction";
import { connect } from 'react-redux'
import InputTextField from '../../common/inputTextField'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email : "",
            password : "",
            errors:{}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData)

    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    componentDidMount() {
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors : nextProps.errors})
        }
        if(nextProps.auth.isAuthenticated){
              this.props.history.push('/dashboard')
        }

    }



    render(){
        const {errors} = this.state
        return (<div className="login ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your DevConnector account</p>
                            <form onSubmit = {this.onSubmit}>
                                <InputTextField
                                type = "email"
                                name = 'email'
                                onChange = {this.onChange}
                                value = {this.state.email}
                                placeholder = "Email Adress"
                                error = {errors.email}
                                />
                                <InputTextField
                                    type = "password"
                                    name = 'password'
                                    onChange = {this.onChange}
                                    value = {this.state.password}
                                    placeholder = "Password"
                                    error = {errors.password}
                                />
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}const mapStateToProps = (state)=>({
    auth : state.auth,
    errors : state.errors

})

export default connect(mapStateToProps , {loginUser} )(Login)