import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header className='header'>
        <h1 className='header-title'>Concert Tracker</h1>
        <nav className='topNav'>
          <ul>
            <li>Find Bands </li> 
            <li>Find Venues </li> 
            <li>Find locations </li> 
          </ul>
        </nav> 
        <button className='sign-in sign-up'>Sign Up or Sign In</button>
      </header>
    );
  }

}

export default Header;


