import React, { Component } from 'react';
import EventCards from './EventCards/EventCards';

export default class EventsContainer extends Component {

  // componentWillUpdate(nextProps) {
  //   if (this.props !== nextProps){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  buildEvents (){
    this.props.concerts.map(concert => {
      console.log(concert.title)
      <h1>Hi</h1>
    });
  }

  render(){
    // console.log(this.props.concerts)
    return (
      <section className='events-container'>
      {this.buildEvents()}
      </section>
    );
  }
}