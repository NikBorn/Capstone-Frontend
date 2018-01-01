import React, { Component } from 'react';
import EventCards from './EventCards/EventCards';

export default class EventsContainer extends Component {

  render(){
    return (
      <section className='events-container'>
        <EventCards />
      </section>
    );
  }
}