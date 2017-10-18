import React, { Component } from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'

import './App.css';
import Header from '../Header'
import Home from '../Home'
import About from '../About'
import Topics from '../Topics'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header/>

            <Route exact path="/"  render={()=>(
              <Redirect to="/home"/>
            )} />

            <Route  path="/home" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/topics" component={Topics}/>
          </div>
        </Router>
    )
  }
}

export default App;



