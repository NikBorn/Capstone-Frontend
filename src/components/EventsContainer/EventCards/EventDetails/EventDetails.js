import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EventsDetails extends Component {
  concertsByLocation ( ){
   return this.props.locationConcerts.map(concert => {
      <h1>{concert.title}</h1>
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locationConcerts: state.lcoationConcerts
  };
};

export default connect(mapStateToProps, null)(EventsDetails);