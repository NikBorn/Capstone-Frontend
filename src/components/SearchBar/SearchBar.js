import React, { Component } from 'react';
import phq from '../../utils/phq';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchBandResults, setSearchTerm } from '../../actions/index';
import './SearchBar.css';
import PropTypes from 'prop-types';
import SignInSignUp from '../SignInSignUp/SignInSignUp';

/* eslint-disable no-console */

class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      selected: null,
      searchValue: ''
    };
  }

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

  render () {

    return (
      <div className='SearchBar'>
        <input className='SearchBar-input' placeholder='Search by Band Name' onChange={(event) => {
          this.setState({searchValue: event.target.value});
        }
        }/>
        <button className='searh-button' onClick={async (event) => {
          event.preventDefault();
          this.props.setSearchTerm(this.state.searchValue);
          await this.fetchSearchBand(this.state.searchValue);
        }
        }>
          <Link to='/band-results'>
            SEARCH
          </Link>
        </button>
        <SignInSignUp />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchBandResults: (searchBandResults) => {
      dispatch(setSearchBandResults(searchBandResults));
    },
    setSearchTerm: (searchTerm) => {
      dispatch(setSearchTerm(searchTerm));
    }
  };
};

SearchBar.propTypes = {
  setSearchBandResults: PropTypes.func,
  setSearchTerm: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));