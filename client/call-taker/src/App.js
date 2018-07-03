import React, { Component } from 'react';
import Login from  "./containers/login/login.container";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Call Taker Sys</h1>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
