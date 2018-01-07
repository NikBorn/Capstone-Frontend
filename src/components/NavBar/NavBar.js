import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

  render () {
    return (
      <ul className='NavBar'>
        <li>
          <Link to='/favorite-bands'>
            Favorite Bands
          </Link>
        </li>
        <li>
          <Link to='/favorite-shows'>
            Favorite Shows
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;