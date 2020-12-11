import React, { Component } from 'react'
import './scss/main.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import EmailVerify from './pages/EmailVerify'
import PasswordReset from './pages/PasswordReset'
import PasswordSet from './pages/PasswordSet'

import Account from './pages/User/Account'
import MembershipStatus from './pages/User/MembershipStatus'
import UploadInfo from './pages/User/UploadInfo'
import Deposit from './pages/User/Deposit'

import BlankPage from './pages/BlankPage'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />

            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/verify' component={EmailVerify} />
            <Route exact path='/passwordreset' component={PasswordReset} />
            <Route exact path='/newpassword' component={PasswordSet} />

            <Route exact path='/account' component={Account} />
            <Route exact path='/account/membership' component={MembershipStatus} />
            <Route exact path='/account/upload' component={UploadInfo} />
            <Route exact path='/account/deposit' component={Deposit} />


            

            <Route exact path='/blank' component={BlankPage} />
        </Switch>
      </Router>
    )
  }
}
