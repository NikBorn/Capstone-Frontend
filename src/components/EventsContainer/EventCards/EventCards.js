import React, { Component } from 'react';
import EventDetails from './EventDetails/EventDetails';

export default class EventsCards extends Component {

  render() {
    return (
      <article className='event-card'>
        <EventDetails />
      </article>
    );
  }
}