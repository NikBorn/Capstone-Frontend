import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EventCards from '../EventCards/EventCards';
import PropTypes from 'prop-types';

class BandPage extends Component {

  postFavoriteBand() {
    const newBand = {
      bandName: this.props.searchTerm
    };
    fetch('https://concert-tracker-api.herokuapp.com/api/v1/bands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBand)
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
      })
      .then(parsed => {
        this.postBandtoJoinsTable(parsed);
      })
      .catch(error => console.log(error));
  }

  postBandtoJoinsTable(band) {
    fetch(`https://concert-tracker-api.herokuapp.com/api/v1/users/${this.props.signedInUser.id}/bands_users/${band[0].id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'}
    })
      .catch(error => console.log(error));
  }
  
  render() {
    const showsArray = this.props.searchBandResults; 
    const shows = showsArray.map(show => {
      const venue = show.entities ? show.entities.venues[0].name : 'No venue name';
    
      return (
        <EventCards title={show.title} venue={venue} start={show.start} key={show.id} concert={show} />
      );
    });

    return (
      <div>
        <div className='band-header'>
          <h3>
            {this.props.searchTerm}
          </h3>
          <button onClick={(event) => {
            event.preventDefault();
            this.postFavoriteBand();
          }}>Favorite</button>
        </div>
        {shows}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchBandResults: state.searchBandResults,
    searchTerm: state.searchTerm,
    signedInUser: state.signedInUser
  };
};

BandPage.propTypes = {
  searchBandResults: PropTypes.array,
  searchTerm: PropTypes.string
};

export default withRouter(connect(mapStateToProps, null)(BandPage));