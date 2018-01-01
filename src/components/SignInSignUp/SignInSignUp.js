import React, { Component } from 'react';
import { auth, provider } from '../../firebase';

class SignInSignUp extends Component  {

  signIn() {
    auth.signInWithPopup(provider)
      .then((result) => {

        console.log(result.user.displayName);
      });
  }

  render() {
    
    return (
      <button onClick={this.signIn}>Sign In/Sign Up</button>
    )
  }
};

export default SignInSignUp;