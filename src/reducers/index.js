import { combineReducers } from 'redux';
import userLocation from './userLocation';
import locationConcerts from './locationConcerts';

export default combineReducers({
  userLocation,
  locationConcerts
});