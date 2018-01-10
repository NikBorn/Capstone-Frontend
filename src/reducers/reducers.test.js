import setFavoriteBands from './favoriteBands';
import favoriteShows from './favoriteShow';
import locationConcerts from './locationConcerts';
import searchBandResults from './searchBandResults';
import searchTerm from './searchTerm';
import signedInUser from './signedInUser';
import userLocation from './userLocation';


describe('Favorite Bands Rducer', () => {
  it('Favorite Bands should set default state', () => {
    const expectation = [];

    expect(setFavoriteBands(undefined, {})).toEqual(expectation);
  });

  it('SET_FAVORITE_BANDS should add favorite bands to state', () => {
    const action = {
      type: 'SET_FAVORITE_BANDS',
      favoriteBands: [{
        id: 1,
        bandName: 'Dead and Co.'
      }]
    };

    const expectation = action.favoriteBands;

    expect(setFavoriteBands(undefined, action)).toEqual(expectation);
  });

});

describe('Favorite Shows Rducer', () => {
  it('Favorite Shows should set default state', () => {
    const expectation = [];

    expect(favoriteShows(undefined, {})).toEqual(expectation);
  });

  it('Set_Favorite_Shows should add favorite show to state', () => {
    const action = {
      type: 'Set_Favorite_Shows',
      favoriteShow: {
        id: 1,
        title: 'Dead and Co.',
        date: '3/3/2018',
        latitude: '-152.23',
        longitude: '45.765'
      }
    };

    const expectation = [action.favoriteShow];

    expect(favoriteShows(undefined, action)).toEqual(expectation);
  });

});

describe('Location Shows Rducer', () => {
  it('Location Shows should set default state', () => {
    const expectation = [];

    expect(locationConcerts(undefined, {})).toEqual(expectation);
  });

  it('Set_Local_Concerts should add favorite show to state', () => {
    const action = {
      type: 'Set_Local_Concerts',
      localConcerts: {
        id: 1,
        title: 'Dead and Co.',
        date: '3/3/2018',
        latitude: '-152.23',
        longitude: '45.765'
      }
    };

    const expectation = [action.localConcerts];

    expect(locationConcerts(undefined, action)).toEqual(expectation);
  });

});

describe('Location Shows Rducer', () => {
  it('Search Band Results Shows should set default state', () => {
    const expectation = [];

    expect(searchBandResults(undefined, {})).toEqual(expectation);
  });

  it('SET_SEARCH_BAND_RESULTS should add an array of shows to state', () => {
    const action = {
      type: 'SET_SEARCH_BAND_RESULTS',
      searchBandResults: [{
        id: 1,
        title: 'Dead and Co.',
        date: '3/3/2018',
        latitude: '-152.23',
        longitude: '45.765'
      }]
    };

    const expectation = action.searchBandResults;

    expect(searchBandResults(undefined, action)).toEqual(expectation);
  });

});

describe('Signed In User Rducer', () => {
  it('Search Term should set default state', () => {
    const expectation = {};

    expect(signedInUser(undefined, {})).toEqual(expectation);
  });

  it('Signed_In_User should add user to state', () => {
    const action = {
      type: 'Signed_In_User',
      user:  {
        id: 4,
        name: 'Ben',
        email: 'Email@email.com',
        perferedLocation: 'Denver, CO'
      }
    };

    const expectation = action.user;

    expect(signedInUser(undefined, action)).toEqual(expectation);
  });

});

describe('User Location Rducer', () => {
  it('User Location should set default state', () => {
    const expectation = null;

    expect(userLocation(undefined, {})).toEqual(expectation);
  });

  it('SET_USER_LOCATION should add user location to state', () => {
    const action = {
      type: 'SET_USER_LOCATION',
      userCoords: {
        latitude: '-145.786',
        longitude: '45.785'
      }
    };

    const expectation = action.userCoords;

    expect(userLocation(undefined, action)).toEqual(expectation);
  });

});

describe('searchTerm Rducer', () => {
  it('Search Term should set default state', () => {
    const expectation = '';

    expect(searchTerm(undefined, {})).toEqual(expectation);
  });

  it('SET_USER_LOCATION should add user location to state', () => {
    const action = {
      type: 'SET_SEARCH_TERM',
      searchTerm: 'Dead and CO.'
    };

    const expectation = action.searchTerm;

    expect(searchTerm(undefined, action)).toEqual(expectation);
  });

});