import React, { Component } from 'react';

export default class EventsCards extends Component {

  render() {
    const month = this.props.start.substr(5, 2);
    const year = this.props.start.substr(0, 4);
    const day = this.props.start.substr(8, 2);
    const showDate = month.concat(`-${day}-`, year);
    return (
      <article className='event-card'>
        <h2>
          {this.props.title}
        </h2>
        <p>
        Venue: {this.props.venue}
        </p>
        <p>
          Date: {showDate}
        </p>
      </article>
    );
  }
}