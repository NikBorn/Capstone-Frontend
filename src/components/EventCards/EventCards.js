import React, { Component } from 'react';
import './EventCards.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavoriteShows } from '../../actions/index';

class EventsCards extends Component {

  addShowToFavorites (concert){
    console.log(concert)
    this.props.setFavoriteShows(concert);
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
        <button className='tracker-button' onClick={()=>this.addShowToFavorites(this.props.concert)}>Add to Tracker</button>
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

export default withRouter(connect(null, mapDispatchToProps)(EventsCards));

EventsCards.propTypes = {
  title: PropTypes.string,
  venue: PropTypes.string,
  start: PropTypes.string
};