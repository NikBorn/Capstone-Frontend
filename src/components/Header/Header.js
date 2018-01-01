import React, { Component } from 'react';
import SignInSignUp from '../SignInSignUp/SignInSignUp';

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
        <SignInSignUp />
      </header>
    );
  }

}

export default Header;


