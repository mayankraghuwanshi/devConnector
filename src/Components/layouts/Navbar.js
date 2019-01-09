import React , { Component } from 'react'
//React and Component should starts with capital letter.
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../Actions/authAction'

class Navbar extends Component{
    render(){
       const { isAuthenticated , user } = this.props.auth
       const authLink = (
           <ul className="navbar-nav ml-auto">
               <a href="#" className="nav-item">
                   <img src={user.avatar} style={{width : "25px" , margin : "5px 5px 0 0"}}></img>
               </a>
               <li className="nav-item">
                   <Link onClick={this.props.logoutUser.bind(this)} className="nav-link" to="/login">Logout</Link>
               </li>
           </ul>
       )

        const guestLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        )

       return (
           <div>
               <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                   <div className="container">
                       <Link className="navbar-brand" to="landing.html"></Link>
                       <button className="navbar-toggler" type="button" data-toggle="collapse"
                               data-target="#mobile-nav">
                           <span className="navbar-toggler-icon"></span>
                       </button>

                       <div className="collapse navbar-collapse" id="mobile-nav">
                           <ul className="navbar-nav mr-auto">
                               <li className="nav-item">
                                   <Link className="nav-link" to="profiles.html">
                                   </Link>
                               </li>
                           </ul>
                           {isAuthenticated ? authLink : guestLink}
                       </div>
                   </div>
               </nav>

           </div>
       )
   }
}
const mapStateToProps=(state)=>({
    auth: state.auth
})

export default connect(mapStateToProps , {logoutUser})(Navbar)