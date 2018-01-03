import React, { Component } from 'react';
import phq from '../../utils/phq';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchBandResults } from '../../actions/index';




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
        q: `${bandName}`
      }
    )
      .then((results) => {
        console.log(results.result.results);
        setSearchBandResults(results.result.results);
      })
      .catch(error => console.log(error));
  }

  render () {

    return (
      <div className='NavBar'>
        <select>
          <option value='Bands'>Bands</option>
          <option value='Venues'>Venues</option>
          <option value='Locations'>Locations</option>
        </select>
        <input onChange={(event) => {
          this.setState({searchValue: event.target.value});
        }

        }/>
        <button onClick={async (event) => {
          event.preventDefault();
          await this.fetchSearchBand(this.state.searchValue);
        }
        }>
          <Link to='/band-results'>
            Search
          </Link>
        </button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchBandResults: (searchBandResults) => {
      dispatch(setSearchBandResults(searchBandResults));
    }
  }
}



export default withRouter(connect(null, mapDispatchToProps)(SearchBar));