import React, { Component } from 'react';
import phq from '../../utils/phq';
import { Link } from 'react-router-dom';



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
        return results.result.results;
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
        <button onClick={(event) => {
          event.preventDefault();
          this.fetchSearchBand(this.state.searchValue);
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

export default SearchBar;