import React, { Component } from 'react';
import phq from '../../utils/phq';


class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      selected: null,
      searchValue: ''
    }
  }

  fetchSearchBand(bandName) {
    return phq.events.search(
      {
        q: `${bandName}`
      }
    )
      .then((results) => {
        console.log(results.result.results)
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
          this.setState({searchValue: event.target.value})
        }

        }/>
        <button onClick={(event) => {
          event.preventDefault();
          this.fetchSearchBand(this.state.searchValue)
        }
        }>Search</button>
      </div>
    )
  };
};

export default SearchBar;