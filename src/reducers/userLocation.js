const userLocation = (state=null, action) => {
  switch (action.type) {
  case 'SET_USER_LOCATION':
    return action.userCoords;
  default: 
    return state;
  };
};

export default userLocation;