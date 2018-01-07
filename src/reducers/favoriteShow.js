const favoriteShows = (state = [], action) => {
  switch (action.type) {
  case 'Set_Favorite_Shows':
      console.log(action.favoriteShow)
      return [...state, action.favoriteShow];
  default:
    return state;
  }
};

export default favoriteShows;