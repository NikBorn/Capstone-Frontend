import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EventCards from '../EventCards/EventCards';
import PropTypes from 'prop-types';

const BandPage = (props) => {

  const showsArray = props.searchBandResults; 
  const shows = showsArray.map(show => {
    const venue = show.entities ? show.entities.venues[0].name : 'No venue name';

    return (
      <EventCards title={show.title} venue={venue} start={show.start} key={show.id} />
    );
  });

  return (
    <div>
      {shows}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchBandResults: state.searchBandResults
  };
};

BandPage.propTypes = {
  searchBandResults: PropTypes.func
};

export default withRouter(connect(mapStateToProps, null)(BandPage));