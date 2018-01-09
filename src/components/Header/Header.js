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

        <div className='header-content'>
          <NavBar />
          <SearchBar />
        </div>
      </header>
    );
  }

}

export default Header;


