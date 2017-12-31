import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentLocation } from './utils/utils';
import Client from 'predicthq';
import { setUserLocation } from './actions/index';
import { connect } from 'react-redux';
import   Header   from './Header/Header';

let phq = new Client({ access_token: '5TMbBWVg0ofZzNXOBTrywjjivhWoV4'});


class App extends Component {

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
      this.fetchLocalConcerts(position.coords.latitude, position.coords.longitude), 
      this.props.setUserLocation({ latitude: position.coords.latitude, 
        longitutde: position.coords.longitude});
    });
  }

  render() {
    return (
      <div className="App">
        <Header /> 
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setUserLocation: (userCoords) => {
      dispatch(setUserLocation(userCoords));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    userCoords: state.userCoords
  };
};

export default connect(mapDispatchToProps, mapDispatchToProps)(App);
