import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { connect } from 'react-redux';
import { setFavoriteBands, setFavoriteShows } from '../../actions';
import SignInModal from '../SignInModal/SignInModal';
import PropTypes from 'prop-types';

/* eslint-disable no-console */

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  fetchFavBands() {
    if (!this.props.signedInUser.id) {
      this.handleModal();
    } else {
      fetch(`https://concert-tracker-api.herokuapp.com/api/v1/users/${this.props.signedInUser.id}/favorite_bands`)
        .then(response => response.json())
        .then(parsed => {
          let bands = parsed.map( (bandObj) => {
            return this.fetchBandName(bandObj.id);
          });
          return Promise.all(bands);
        })
        .then(res => {
          const bandObjs = res.map(band => {
            return band[0];
          });
          this.props.setFavoriteBands(bandObjs);
        })
        .catch(error => console.log(error));
    }
  }

  fetchBandName(bandId) {
    return (
      fetch(`https://concert-tracker-api.herokuapp.com/api/v1/bands/${bandId}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    );
  }

  fetchFavShows() {
    if (!this.props.signedInUser.id){
      this.handleModal();
    } else {
      fetch(`https://concert-tracker-api.herokuapp.com/api/v1/users/${this.props.signedInUser.id}/favorite_shows`)
        .then(response => response.json())
        .then(parsed => {
          let shows = parsed.map( (showObj) => {
            return this.fetchShowInfo(showObj.showId);
          });
          return Promise.all(shows);
        })
        .then(res => {
          const showObjs = res.map(show => {
            this.props.setFavoriteShows(show[0]);
          });
        })
        .catch(error => console.log(error));
    }
  }

  fetchShowInfo(showId) {
    return (
      fetch(`https://concert-tracker-api.herokuapp.com/api/v1/shows/${showId}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    );
  }

  render () {
    return [

      <ul className='NavBar' key='2'>
        <h1 className='header-title' key='1'>
          <Link to='/'>
            Concert Tracker
          </Link>
        </h1>
        <li>
          <button className='nav-button' 
            onClick={(event) => {
              event.preventDefault();
              this.fetchFavBands();
            }}>
            <Link to='/favorite-bands'>
              Favorite Bands
            </Link>
          </button>
        </li>
        <li>
          <button className='nav-button' 
            onClick={(event) => {
              event.preventDefault();
              this.fetchFavShows();
            }}>
            <Link to='/favorite-shows'>
            Favorite Shows
            </Link>
          </button>
        </li>
        {this.state.modalOpen && <SignInModal
          close={this.handleModal} />}
      </ul>
    ];
  }
}

const mapStateToProps = (state) => {
  return {
    signedInUser: state.signedInUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteBands: (userCoords) => {
      dispatch(setFavoriteBands(userCoords));
    },
    setFavoriteShows: (favoriteShow) => {
      dispatch(setFavoriteShows(favoriteShow));
    }
  };
};

NavBar.propTypes = {
  signedInUser: PropTypes.obj,
  setFavoriteBands: PropTypes.func,
  setFavoriteShows: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);