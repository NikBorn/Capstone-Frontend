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
    this.props.concerts.map(concert => {
      <EventCards title={concert.title}/>;
    });
  }

  render(){
    console.log(this.props)
    return (
      <section className='events-container'>

      </section>
    );
  }
}