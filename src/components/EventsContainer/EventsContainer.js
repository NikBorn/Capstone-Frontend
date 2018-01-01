import React, { Component } from 'react';
import EventCards from './EventCards/EventCards';

export default class EventsContainer extends Component {

  componentWillUpdate(nextProps) {
    if (this.props !== nextProps){
      return true;
    } else {
      return false;
    }
  }

  buildEvents (){
    return this.props.concerts.map(concert => {
      console.log(concert.title);
      return <EventCards title={concert.title} />
    });
  }

  render(){
    console.log(this.props.concerts)
    return (
      <section className='events-container'>
      {this.buildEvents()}
      </section>
    );
  }
}