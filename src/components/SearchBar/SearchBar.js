import React, { Component } from 'react';
import phq from '../../utils/phq';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchBandResults } from '../../actions/index';
import './SearchBar.css';
import PropTypes from 'prop-types';


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
        console.log(results.result.results);
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
          await this.fetchSearchBand(this.state.searchValue);
        }
        }>
          <Link to='/band-results'>
            SEARCH
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

SearchBar.propTypes = {
  setSearchBandResults: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));