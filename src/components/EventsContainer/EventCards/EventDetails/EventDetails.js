import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EventsDetails extends Component {
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