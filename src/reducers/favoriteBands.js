const setFavoriteBands = (state=[], action) => {
  switch (action.type) {
  case 'SET_FAVORITE_BANDS':
    return action.favoriteBands;
  default:
    return state;
  }
};

export default setFavoriteBands;