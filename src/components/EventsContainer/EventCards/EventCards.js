import React, { Component } from 'react';

export default class EventsCards extends Component {

  render() {
    return (
      <article className='event-card'>
        <h2>
          {this.props.title}
        </h2>
        <p>
        Venue: {this.props.venue}
        </p>
        <p>
          Start: {this.props.start}
        </p>
      </article>
    );
  }
}