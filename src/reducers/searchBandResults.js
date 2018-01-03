const searchBandResults = (state=[], action) => {
  console.log('reducer')
  switch (action.type) {
  case 'SET_SEARCH_BAND_RESULTS':
    return action.searchBandResults;
  default:
    return state;
  }
};

export default searchBandResults;