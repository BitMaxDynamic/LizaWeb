import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Market from './market/Market';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LizaBitDynamic</h2>
        </div>
        <Market />
      </div>
    );
  }
}

export default App;
