import * as actions from './index';

describe('Actions', () => {

  it('setUserLocation should take an object and return an action', () => {
    const userCoords =  {
      latitude: '-145.786',
      longitude: '45.785'
    };
    const expected = {
      type: 'SET_USER_LOCATION',
      userCoords: {
        latitude: '-145.786',
        longitude: '45.785'
      }
    };

    expect(actions.setUserLocation(userCoords)).toEqual(expected);
  });

  it('setLocationConcerts should take an object and return an action', () => {
    const localConcerts = {
      id: 1,
      title: 'Dead and Co.',
      date: '3/3/2018',
      latitude: '-152.23',
      longitude: '45.765'
    };
    const expected = {
      type: 'Set_Local_Concerts',
      localConcerts: {
        id: 1,
        title: 'Dead and Co.',
        date: '3/3/2018',
        latitude: '-152.23',
        longitude: '45.765'
      }
    };

    expect(actions.setLocationConcerts(localConcerts)).toEqual(expected);
  });

  it('signedInUser should take an object and return an action', () => {
    const user = {
      id: 4,
      name: 'Ben',
      email: 'Email@email.com',
      perferedLocation: 'Denver, CO'
    };

    const expected = {
      type: 'Signed_In_User',
      user: {
        id: 4,
        name: 'Ben',
        email: 'Email@email.com',
        perferedLocation: 'Denver, CO'
      }
    };

    expect(actions.signedInUser(user)).toEqual(expected);
  });

  it('setSearchBandResults should take an array and return an action', () => {
    const searchBandResults = [{
      id: 1,
      title: 'Dead and Co.',
      date: '3/3/2018',
      latitude: '-152.23',
      longitude: '45.765'
    }];

    const expected = {
      type: 'SET_SEARCH_BAND_RESULTS',
      searchBandResults: [{
        id: 1,
        title: 'Dead and Co.',
        date: '3/3/2018',
        latitude: '-152.23',
        longitude: '45.765'
      }]
    };

    expect(actions.setSearchBandResults(searchBandResults)).toEqual(expected);
  });

  it('searchTerm should take a string and return an action', () => {
    const searchTerm = 'Dead and CO.';

    const expected = {
      type: 'SET_SEARCH_TERM',
      searchTerm: 'Dead and CO.'
    };

    expect(actions.setSearchTerm(searchTerm)).toEqual(expected);
  });

  it('setFavoriteShows should take an object and return an action', () => {
    const favoriteShow = {
      id: 1,
      title: 'Dead and Co.',
      date: '3/3/2018',
      latitude: '-152.23',
      longitude: '45.765'
    };

    const expected = {
      type: 'Set_Favorite_Shows',
      favoriteShow: {
        id: 1,
        title: 'Dead and Co.',
        date: '3/3/2018',
        latitude: '-152.23',
        longitude: '45.765'
      }
    };

    expect(actions.setFavoriteShows(favoriteShow)).toEqual(expected);
  });

  it('setFavoriteBands should take an object and return an action', () => {
    const favoriteBands = {
      id: 1,
      bandName: 'Dead and Co.'
    };

    const expected = {
      type: 'SET_FAVORITE_BANDS',
      favoriteBands: {
        id: 1,
        bandName: 'Dead and Co.'
      }
    };

    expect(actions.setFavoriteBands(favoriteBands)).toEqual(expected);
  });

});