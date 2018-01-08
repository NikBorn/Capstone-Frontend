import { combineReducers } from 'redux';
import userLocation from './userLocation';
import locationConcerts from './locationConcerts';
import signedInUser from './signedInUser';
import searchBandResults from './searchBandResults';
import searchTerm from './searchTerm';
import favoriteShows from './favoriteShow';
import favoriteBands from './favoriteBands';

export default combineReducers({
  userLocation,
  locationConcerts,
  signedInUser,
  searchBandResults,
  searchTerm,
  favoriteShows,
  favoriteBands
});