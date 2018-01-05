import React, { Component } from 'react';
import EventCards from '../EventCards/EventCards';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Client from 'predicthq';
import { setUserLocation, setLocationConcerts } from '../../actions/index';
import phq from '../../utils/phq';
import './EventsContainer.css'


class EventsContainer extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.props.setUserLocation({
        latitude: position.coords.latitude,
        longitutde: position.coords.longitude
      });
      const localConcerts = await this.fetchLocalConcerts(position.coords.latitude, position.coords.longitude);
      this.props.setLocationConcerts(localConcerts);
    });
  }

  fetchLocalConcerts(lat, long) {
    return phq.events.search(
      {
        // rank_level: 5,
        category: 'concerts',
        within: `100mi@${lat},${long}`,
        'active.gte': '2018-01-01'
      }
    )
      .then((results) => {
        return results.result.results;
      })
      .catch(error => console.log(error));
  }

  buildEvents (){
    return this.props.locationConcerts.map(concert => {
      console.log('concert', concert)
      if (concert.entities === null) {
        return <EventCards title={concert.title} venue='Not Available' start={concert.start} key={concert.id}/>;
      } else {
        return <EventCards title={concert.title} venue={concert.entities.venues[0].name} start={concert.start} key={concert.id}/>;
      }
    });
  }

  render(){
    return (
      <section className='events-container'>
        {this.buildEvents()}
      </section>
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

EventsContainer.propTypes = {
  setUserLocation: PropTypes.func,
  setLocationConcerts: PropTypes.func
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer));