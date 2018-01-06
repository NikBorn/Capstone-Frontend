import React, { Component } from 'react';
import './EventCards.css';
import PropTypes from 'prop-types';

class EventsCards extends Component {

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
        <button className='tracker-button'>Add to Tracker</button>
      </article>
    );
  }
}

EventsCards.propTypes = {
  title: PropTypes.string,
  venue: PropTypes.string,
  start: PropTypes.string
};

export default EventsCards;