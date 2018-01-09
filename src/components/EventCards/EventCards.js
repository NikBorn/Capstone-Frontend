import React, { Component } from 'react';
import './EventCards.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavoriteShows } from '../../actions/index';
import SignInModal from '../SignInModal/SignInModal';

class EventsCards extends Component {
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

  postFavoriteShow(concert){
    const venue = concert.entities === null ? "Not Available" : concert.entities.venues[0].name;
    const description = concert.description === "" ? "Not Available" : concert.description;
    const favoriteConcert = {
      title: concert.title,
      apiKey: concert.id,
      venue: venue,
      date: concert.start,
      latitude: concert.location[0].toString(),
      longitude: concert.location[1].toString(),
      description: description
    };
    fetch('http://localhost:3001/api/v1/shows', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(favoriteConcert)
    })
      .then(response => response.json())
      .then(parsed => this.postShowToJoinsTable(parsed))
      .catch(error => console.log(error));
  }

  postShowToJoinsTable(concert) {
    fetch(`http://localhost:3001/api/v1/users/${this.props.signedInUser.id}/users_shows/${concert[0].id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  

  addShowToFavorites (concert){
    this.postFavoriteShow(concert);
    // this.props.setFavoriteShows(concert);
  }

  render() {
    const month = this.props.start.substr(5, 2);
    const year = this.props.start.substr(0, 4);
    const day = this.props.start.substr(8, 2);
    const showDate = month.concat(`-${day}-`, year);
    return (
      <article className='event-card'>
        <h3 className='event-title'>
          {this.props.title}
        </h3>
        <p>
          {showDate}
        </p>
        <p>
          {this.props.venue}
        </p>
        {this.props.signedInUser.id ? 
          <button className='tracker-button' onClick={() => this.addShowToFavorites(this.props.concert)}>Add to Tracker</button>
          :
          <button className='tracker-button' onClick={this.handleModal} >Sign In To Track</button>
        }
        {this.state.modalOpen && <SignInModal
          close={this.handleModal} />}
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteShows: (favoriteShow) => {
      dispatch(setFavoriteShows(favoriteShow));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    signedInUser: state.signedInUser
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsCards));

EventsCards.propTypes = {
  title: PropTypes.string,
  venue: PropTypes.string,
  start: PropTypes.string,
  concert: PropTypes.object,
  signedInUser: PropTypes.object,
  setFavoriteShows: PropTypes.func
};