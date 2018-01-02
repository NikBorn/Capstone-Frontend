import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render () {
    return (
      <ul className='NavBar'>
        <li>
          {/* <Link> */}
            Home
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
            Favorites
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
            Profile
          {/* </Link> */}
        </li>
      </ul>
    )
  }
};

export default NavBar;