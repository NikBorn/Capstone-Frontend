import React, { Component } from 'react';
import './App.css';
import   Header   from '../Header/Header';
import   EventsContainer   from '../EventsContainer/EventsContainer';
import { Route } from 'react-router';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/'
          render={() => [
            <Header />
          ]
          }
        />
        <Route exact path='/'
          render={() => [
            <EventsContainer />
          ]
          }
        />
        <Route exact path='/Favorites'
          render={() => [
            <h1>FAVORITES PAGE GOES HERE</h1>
          ]
          }
        />
        <Route exact path='/Profile'
          render={() => [
            <h1>PROFILE PAGE GOES HERE</h1>
          ]
          }
        />
      </div>
    );
  }
}

