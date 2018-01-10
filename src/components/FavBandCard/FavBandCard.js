import React, { Component } from 'react';
import phq from '../../utils/phq';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchBandResults, setSearchTerm } from '../../actions/index';
import PropTypes from 'prop-types';

/* eslint-disable no-console */

class FavBandCard extends Component {

  fetchSearchBand(bandName) {
    return phq.events.search(
      {
        'q': `${bandName}`
      }
    )
      .then((results) => {
        this.props.setSearchBandResults(results.result.results);
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <div>
        <h3>{this.props.bandName}</h3>
        <button onClick={(event) => {
          event.preventDefault();
          this.fetchSearchBand(this.props.bandName);
        }
        }>
          <Link to='/band-results'>
            search
          </Link>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchBandResults: (searchBandResults) => {
      dispatch(setSearchBandResults(searchBandResults));
    }
  };
};

FavBandCard.propTypes = {
  setSearchBandResults: PropTypes.func,
  bandName: PropTypes.string
};

export default withRouter(connect(null, mapDispatchToProps)(FavBandCard));