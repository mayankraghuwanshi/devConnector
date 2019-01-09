import React, { Component } from 'react';
import Navbar from './Components/layouts/Navbar'
import Footer from './Components/layouts/Footer'
import Landing from './Components/layouts/Landing'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import {BrowserRouter as Router , Route , Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import './App.css';
import store from './store'
import jwt_decode from 'jwt-decode'
import setAuthHeader from './utils/setAuthHeader'
import {setCurrentUser} from "./Actions/authAction";
import Dashboard from './Components/dashboard/dashboard'
import PrivateRoute from './common/pricateRoute'
import CreateProfile from './Components/dashboard/create-profile'
import addEducation from './Components/dashboard/addEducation'
import addExperience from './Components/dashboard/addExperience'
import editProfile from "./Components/dashboard/editProfile";
import Profiles from './Components/profile/profiles'
import Profile from './Components/profile/profile'

if(localStorage.jwtToken){
    setAuthHeader(localStorage.jwtToken)
    const user = jwt_decode(localStorage.jwtToken)
    store.dispatch(setCurrentUser(user))

}


//use switch to prevent some strange redirect


class App extends Component {
  render()
  {    return (
        <Provider store = {store}>
              <Router>
                  <div className="App">
                  <Navbar/>
                  <Route exact path = '/' component = {Landing}/>
                  <div className="container">
                  <Route exact path = "/login" component = {Login} />
                  <Route exact path = "/register" component = {Register} />
                      <Switch>
                  <PrivateRoute exact path = "/create-profile" component = {CreateProfile} />
                  <PrivateRoute exact path = "/dashboard" component = {Dashboard}/>
                  <PrivateRoute exact path = "/add-education" component = {addEducation}/>
                  <PrivateRoute exact path = "/add-experience" component = {addExperience}/>
                  <PrivateRoute exact path = "/edit-profile" component = {editProfile}/>
                      </Switch>
                  <Route exact path = "/profiles" component = {Profiles}/>
                  <Route exact path = "/profile/:handle" component = {Profile}/>
                  </div><Footer/></div>
              </Router>
        </Provider>
    );
  }
}

export default App;
