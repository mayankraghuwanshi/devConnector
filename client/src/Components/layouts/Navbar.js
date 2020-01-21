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
               <li className="nav-item">
                   <Link className="nav-link" to="/profiles">
                       Profiles
                   </Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to="/feed">
                       Feeds
                   </Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to="/dashboard">
                       Dashboard
                   </Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to="/login" onClick={this.props.logoutUser}>
                       <img className="rounded-circle" style={{width: "25px" , marginRight: "5px"}}
                            src={user.avatar}
                            alt="" title="You must have a Gravatar connected to your email to display an image"/> Logout
                   </Link>
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
               <nav className="navbar navbar-expand-sm navbar-dark bg-gradient mb-4">
                   <div className="container">
                       {/*<Link className="navbar-brand" to="/"><img src="https://ltstream.com/wp-content/uploads/2015/08/LS-Connect-Logo.png" style={{height: "40px", width: "100px"}}/></Link>*/}
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