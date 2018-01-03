const signedInUser = (state = {}, action) => {
    console.log(action.type)
  switch (action.type) {
      case 'Signed_In_User':
    console.log('hi')
    return action.user;
  default:
    console.log('null')
    return state;
  }
};

export default signedInUser;