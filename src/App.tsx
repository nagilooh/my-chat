import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { proxy } from "./Proxy"
import { Login } from './Login'
import { Main } from './Main'

export default class App extends Component {

  state = { showLogin: true };
  render() {
    return (
      <div className="app">
        {this.state.showLogin ? <Login /> : <Main />}
      </div>
    );
  }

  componentDidMount() {
      proxy.addEventListener("login", () => {this.setState( {showLogin: false})});
  }
}
