import React, { Component } from 'react';
import './App.css';
import Market from './market/Market';
import Dashboard from "./dashboard/Dashboard";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Dashboard />
        <Market />

      </div>
    );
  }
}

export default App;
