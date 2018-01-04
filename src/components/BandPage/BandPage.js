import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const BandPage = (props) => {

  const showsArray = props.searchBandResults; 
  const shows = showsArray.map(show => {
    const venue = show.entities ? show.entities.venues[0].name : 'No venue name';
    const month = show.start.substr(5, 2);
    const year = show.start.substr(0, 4);
    const day = show.start.substr(8, 2);
    const showDate = month.concat(`-${day}-`, year);

    return (
      <div className='show-card'>
        <h3>{show.title}</h3>
        <h4>{venue}</h4>
        <h4>Date: {showDate}</h4>
      </div>
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