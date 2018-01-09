import React, { Component } from 'react';
import './App.css';
import   Header   from '../Header/Header';
import   EventsContainer   from '../EventsContainer/EventsContainer';
import { Route } from 'react-router';
import BandPage from '../BandPage/BandPage';
import FavBandsPage from '../FavBandsPage/FavBandsPage';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/'
          render={() => <Header />
          }
        />
        <Route exact path='/'
          render={() => 
            <EventsContainer />
          }
        />
        <Route exact path='/band-results'
          render={() => 
            <BandPage />
          }
        />
        <Route exact path='/favorite-bands'
          render={() => 
            <FavBandsPage />
          }
        />
        <Route exact path='/favorite-shows'
          render={() =>
            <EventsContainer />
          }
        />
      </div>
    );
  }
}

