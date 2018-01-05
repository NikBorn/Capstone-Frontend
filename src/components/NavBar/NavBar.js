import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

  render () {
    return (
      <ul className='NavBar'>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          {/* <Link> */}
            Favorite Bands
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
            Favorite Shows
          {/* </Link> */}
        </li>
      </ul>
    )
  }
};

export default NavBar;