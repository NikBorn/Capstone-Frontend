import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EventCards from '../EventCards/EventCards';
import PropTypes from 'prop-types';

const BandPage = (props) => {
  console.log('props: ', props);
  const showsArray = props.searchBandResults; 
  const shows = showsArray.map(show => {
    const venue = show.entities ? show.entities.venues[0].name : 'No venue name';
    

    return (
      <EventCards title={show.title} venue={venue} start={show.start} key={show.id} />
    );
  });

  return (
    <div>
      <div className='band-header'>
        <h3>
          {props.searchTerm}
        </h3>
        <button>Favorite</button>
      </div>
      {shows}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchBandResults: state.searchBandResults,
    searchTerm: state.searchTerm
  };
};

BandPage.propTypes = {
  searchBandResults: PropTypes.array,
  searchTerm: PropTypes.string
};

export default withRouter(connect(mapStateToProps, null)(BandPage));