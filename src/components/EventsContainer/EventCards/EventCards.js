import React, { Component } from 'react';

export default class EventsCards extends Component {

  render() {
    console.log(this.props)
    return (
      <article className='event-card'>
      <h1>
        {this.props.title}
      </h1>
      </article>
    );
  }
}