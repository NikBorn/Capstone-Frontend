import { combineReducers } from 'redux';
import userLocation from './userLocation';
import locationConcerts from './locationConcerts';
import signedInUser from './signedInUser';
import searchBandResults from './searchBandResults';
import searchTerm from './searchTerm';

export default combineReducers({
  userLocation,
  locationConcerts,
  signedInUser,
  searchBandResults,
  searchTerm
});