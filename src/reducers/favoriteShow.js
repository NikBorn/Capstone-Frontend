const favoriteShows = (state = [], action) => {
  switch (action.type) {
  case 'Set_Favorite_Shows':
    return [...state, action.favoriteShow];
  default:
    return state;
  }
};

export default favoriteShows;