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
import BlankPage from './pages/BlankPage'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />

            <Route exact path='/login' component={Login} />


            <Route exact path='/blank' component={BlankPage} />
        </Switch>
      </Router>
    )
  }
}
