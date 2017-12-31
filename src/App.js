import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentLocation } from './utils/utils';
import Client from 'predicthq';

let phq = new Client({ access_token: '5TMbBWVg0ofZzNXOBTrywjjivhWoV4'});


class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: ''
    };
  }

  fetchLocalConcerts(lat, long) {
    phq.events.search(
      { 
        rank_level: 5, 
        category: 'concerts', 
        within: `100mi@${lat},${long}` 
      }
    )
      .then((results) => {
        console.log(results);
        for (let event of results)
          console.info(event.title);
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        { 
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude 
        }, 
        this.fetchLocalConcerts(this.state.latitude, this.state.longitude));
    });
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
