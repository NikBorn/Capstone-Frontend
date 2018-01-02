import React, { Component } from 'react';
import SignInSignUp from '../SignInSignUp/SignInSignUp';
import SearchBar from '../SearchBar/SearchBar'

class Header extends Component {

  render() {
    return (
      <header className='header'>
        <h1 className='header-title'>Concert Tracker</h1>
        
        <SearchBar />
        <SignInSignUp />
      </header>
    );
  }

}

export default Header;


