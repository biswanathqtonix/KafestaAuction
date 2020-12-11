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



            <Route exact path='/blank' component={BlankPage} />
        </Switch>
      </Router>
    )
  }
}
