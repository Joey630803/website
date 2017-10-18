import React, { Component } from 'react';
import './header.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'

function Header(){
  return(
      <div class="header-navigation">
        <ul className="header-ul"></ul>
        <ul className="header-ul"></ul>
        <ul className="header-ul">
          <li><NavLink to="/home" activeClassName='active'>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName='active'>About</NavLink></li>
          <li><NavLink to="/topics" activeClassName='active'>Topics</NavLink></li>
        </ul>
      </div>
  )
}



export default Header;
