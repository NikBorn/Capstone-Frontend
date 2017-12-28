import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentLocation } from './utils/utils'

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: '',
    }
  }

  fetchLocalConcerts() {
    
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
