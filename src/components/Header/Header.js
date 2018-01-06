import React, { Component } from 'react';
import SignInSignUp from '../SignInSignUp/SignInSignUp';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <header className='header'>
        <h1 className='header-title'>
          <Link to='/'>
            Concert Tracker
          </Link>
        </h1>
        <div className='header-content'>
          <NavBar />
          <SearchBar />
          <SignInSignUp />
        </div>
      </header>
    );
  }

}

export default Header;


