import React, { Component } from 'react';
import './App.css';
import Client from 'predicthq';
import { setUserLocation, setLocationConcerts } from '../../actions/index';
import { connect } from 'react-redux';
import   Header   from '../Header/Header';
import   EventsContainer   from '../EventsContainer/EventsContainer';
import PropTypes from 'prop-types';

let phq = new Client({ access_token: '5TMbBWVg0ofZzNXOBTrywjjivhWoV4'});

class App extends Component {

  fetchLocalConcerts(lat, long) {
    return phq.events.search(
      { 
        rank_level: 5, 
        category: 'concerts', 
        within: `100mi@${lat},${long}` 
      }
    )
      .then((results) => {
        return results.result.results;
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( async (position) => {
      this.props.setUserLocation({ latitude: position.coords.latitude, 
        longitutde: position.coords.longitude});
      const localConcerts = await this.fetchLocalConcerts(position.coords.latitude, position.coords.longitude);
      this.props.setLocationConcerts(localConcerts);
    });
  }


  render() {
    return (
      <div className="App">
        <Header /> 
        <EventsContainer concerts={this.props.locationConcerts}/> 
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setUserLocation: (userCoords) => {
      dispatch(setUserLocation(userCoords));
    },
    setLocationConcerts: (localConcerts) => {
      dispatch(setLocationConcerts(localConcerts));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    userCoords: state.userCoords,
    locationConcerts: state.locationConcerts
  };
};

App.propTypes = {
  setUserLocation: PropTypes.func,
  setLocationConcerts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
