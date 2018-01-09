import React, { Component } from 'react';
import EventCards from '../EventCards/EventCards';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserLocation, setLocationConcerts } from '../../actions/index';
import phq from '../../utils/phq';
import './EventsContainer.css';


class EventsContainer extends Component {

  constructor() {
    super();
    this.state={
      offset: 10
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.props.setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      const localConcerts = await this.fetchLocalConcerts(position.coords.latitude, position.coords.longitude);
      this.props.setLocationConcerts(localConcerts);
    });
  }

  fetchLocalConcerts(lat, long) {
    const todaysDate = (new Date()).toISOString();
    return phq.events.search(
      {
        sort: 'start',
        category: 'concerts',
        within: `100mi@${lat},${long}`,
        'active.gte': `${todaysDate.substr(0, 10)}`
      }
    )
      .then((results) => {
        return results.result.results;
      })
      .catch(error => console.log(error));
  }

  increaseOffset() {
    this.setState({offset: this.state.offset + 10});
  }

  fetchNextTen () {
    const todaysDate = (new Date()).toISOString();
    const lat = this.props.userLocation.latitude;
    const long = this.props.userLocation.longitude;
    return phq.events.search(
      {
        sort: 'start',
        category: 'concerts',
        within: `100mi@${lat},${long}`,
        'active.gte': `${todaysDate.substr(0, 10)}`,
        offset: `${this.state.offset}`
      },
      this.increaseOffset()
    );
  }

  buildEvents() {
    if (this.props.location.pathname === '/'){
      return this.props.locationConcerts.map((concert, index) => {
        if (concert.entities === null) {
          return <EventCards 
            title={concert.title} 
            venue='No Venue Listed' 
            start={concert.start} 
            key={concert.id.concat(index)}
            concert={concert}/>;
        } else {
          return <EventCards 
            title={concert.title} 
            venue={concert.entities.venues[0].name} 
            start={concert.start} 
            key={concert.id.concat(index)}
            concert={concert}/>;
        }
      });
    } else if (this.props.location.pathname === '/favorite-shows'){
      return this.props.favoriteShows.map((concert, index) => {
        return <EventCards
          title={concert.title}
          venue={concert.venue}
          start={concert.date}
          key={concert.apiKey.concat(index)}
          concert={concert} />;
      });
    }
  }

  handleClick = async () => {
    const nextTen = await this.fetchNextTen();
    this.props.setLocationConcerts(nextTen);
    // console.log(nextTen.result.results);
  }

  render(){
    console.log(this.props);
    const isLoading = this.props.locationConcerts.length ? 'loading-screen-hide' : 'loading-screen';
    return (
      <section className='events-container'>
        <div className={isLoading}></div>
        {this.buildEvents()}
        <button className='show-more-button'
          onClick={(event) => {
            event.preventDefault();
            this.handleClick();
          }
          }
        >Show More</button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLocation: (userCoords) => {
      dispatch(setUserLocation(userCoords));
    },
    setLocationConcerts: (localConcerts) => {
      dispatch(setLocationConcerts(localConcerts));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation,
    locationConcerts: state.locationConcerts,
    favoriteShows: state.favoriteShows
  };
};

EventsContainer.propTypes = {
  setUserLocation: PropTypes.func,
  setLocationConcerts: PropTypes.func,
  locationConcerts: PropTypes.array,
  userLocation: PropTypes.object
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer));