export const setUserLocation = (userCoords) => {
  return {
    type: 'SET_USER_LOCATION',
    userCoords
  };
};