import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { connect } from 'react-redux';
import { setFavoriteBands } from '../../actions';


class NavBar extends Component {

  fetchFavBands() {
    console.log(this.props.signedInUser.id);
    fetch(`http://localhost:3000/api/v1/users/${this.props.signedInUser.id}/favorite_bands`)
      .then(response => response.json())
      .then(parsed => {
        console.log(parsed);
        let bands = parsed.map(async (bandObj) => {
          return await this.fetchBandName(bandObj.id);
        });
        console.log(bands);
        return Promise.all(bands);
      })
      .then(res => {
        console.log(res);
        const bandObjs = res.map(band => {
          return band[0];
        });
        this.props.setFavoriteBands(bandObjs);
      })
      .catch(error => console.log(error));
  }

  fetchBandName(bandId) {
    return (
      fetch(`http://localhost:3000/api/v1/bands/${bandId}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    );
  }

  render () {
    return (
      <ul className='NavBar'>
        <li>
          <button onClick={(event) => {
            event.preventDefault();
            this.fetchFavBands();
          }}>
            <Link to='/favorite-bands'>
              Favorite Bands
            </Link>
          </button>
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

const mapStateToProps = (state) => {
  return {
    signedInUser: state.signedInUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteBands: (userCoords) => {
      dispatch(setFavoriteBands(userCoords));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);