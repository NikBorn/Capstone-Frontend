import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EventCards from '../EventCards/EventCards';

const BandPage = (props) => {

  const showsArray = props.searchBandResults; 
  const shows = showsArray.map(show => {
    const venue = show.entities ? show.entities.venues[0].name : 'No venue name';
    const month = show.start.substr(5, 2);
    const year = show.start.substr(0, 4);
    const day = show.start.substr(8, 2);
    const showDate = month.concat(`-${day}-`, year);

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

export default withRouter(connect(mapStateToProps, null)(BandPage));