import React, { Component } from 'react';

class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      selected: null
    }
  }

  render () {

    return (
      <div className='NavBar'>
        <select>
          <option value='Bands'>Bands</option>
          <option value='Venues'>Venues</option>
          <option value='Locations'>Locations</option>
        </select>
        <input/>
        <button>Search</button>
      </div>
    )
  };
};

export default SearchBar;