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
      // console.log(concert.entities.venues[0].name)
      if (concert.entities === null) {
        return <EventCards title={concert.title} venue='Not Available' start={concert.start} />;
      } else {
        return <EventCards title={concert.title} venue={concert.entities.venues[0].name} start={concert.start}/>;
      }
    });
  }

  render(){
    return (
      <section className='events-container'>
      {this.buildEvents()}
      </section>
    );
  }
}