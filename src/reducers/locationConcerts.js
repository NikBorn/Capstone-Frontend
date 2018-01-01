const locationConcerts = (state=null, action) => {
  switch (action.type) {
  case 'Set_Local_Concerts':
    return action.localConcerts;
  default: 
    return state;
  }
};

export default locationConcerts;