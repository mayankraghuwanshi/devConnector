import React, {Component} from 'react'
import { registerUser } from '../../Actions/authAction'
import {connect} from 'react-redux'
import InputTextField from "../../common/inputTextField";



class Register extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email : "",
            password : "",
            password2: "",
            errors : {}
        }
        //Binding function to current state (two way binding)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        const newUser = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            password2: this.state.password2,
        }
            this.props.registerUser(newUser)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
     }
     componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors : nextProps.errors})
        }
     }

    componentDidMount() {
        if(this.props.auth.isAuthenticated){
            this.props.history.push ('/dashboard')
        }
    }

    render(){
         const {errors} = this.state

        return (<div className="register">
                <div className="container box">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form onSubmit={this.onSubmit}  noValidate>
                                <InputTextField
                                    type = "text"
                                    name = 'name'
                                    onChange = {this.onChange}
                                    value = {this.state.name}
                                    placeholder = "Name"
                                    error = {errors.name}
                                />
                                <InputTextField
                                     type = "email"
                                     name = 'email'
                                     onChange = {this.onChange}
                                     value = {this.state.email}
                                     placeholder = "Email Adress"
                                     error = {errors.email}/>
                                <InputTextField
                                     type = "password"
                                     name = 'password'
                                     onChange = {this.onChange}
                                     value = {this.state.password}
                                     placeholder = "Password"
                                     error = {errors.password}/>
                                <InputTextField
                                    type = "password"
                                    name = 'password2'
                                    onChange = {this.onChange}
                                    value = {this.state.password2}
                                    placeholder = "Confirm Password"
                                    error = {errors.passwort2}/>
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


//This function is used to brong data from storage to this component and this'll make a new veriable called auth
//which we can access using this.props.auth.
const mapStateToProps = (state)=>({
    auth : state.auth,
    errors : state.errors

})

export default connect(mapStateToProps , {registerUser})(Register)