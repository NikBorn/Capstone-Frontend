const signedInUser = (state = {}, action) => {
  switch (action.type) {
      case 'Signed_In_User':
    return action.user;
  default:
    return state;
  }
};

export default signedInUser;