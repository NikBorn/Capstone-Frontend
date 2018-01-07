export const setUserLocation = (userCoords) => {
  return {
    type: 'SET_USER_LOCATION',
    userCoords
  };
};

export const setLocationConcerts = (localConcerts) => {
  return {
    type: 'Set_Local_Concerts',
    localConcerts
  };
};

export const signedInUser = (user) => {
  return {
    type: 'Signed_In_User',
    user
  };
};

export const setSearchBandResults = (searchBandResults) => {
  return {
    type: 'SET_SEARCH_BAND_RESULTS',
    searchBandResults
  };
};

export const setSearchTerm = (searchTerm) => {
  return {
    type: 'SET_SEARCH_TERM',
    searchTerm
  };
};

export const setFavoriteShows = (favoriteShow) => {
  return {
    type: 'Set_Favorite_Shows',
    favoriteShow
  };
};