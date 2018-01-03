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
  console.log('Action!', searchBandResults)
  return {
    type: 'SET_SEARCH_BAND_RESULTS',
    searchBandResults
  };
};