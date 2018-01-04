import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const BandPage = (props) => {

  const showsArray = props.searchBandResults;

  // console.log(shows)
  
  const shows = showsArray.map(show => {
    console.log(show.title)

    const venue = show.entities ? show.entities.venues[0].name : 'No venue name'

    return (
      <div>
        <h3>{show.title}</h3>
        <h4>{venue}</h4>
        <h4>Date: {show.start}</h4>
      </div>
    )
  })

  return (
    <div>
      {shows}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    searchBandResults: state.searchBandResults
  };
};



export default withRouter(connect(mapStateToProps, null)(BandPage))