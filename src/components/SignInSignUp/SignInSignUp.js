import React, { Component } from 'react';

class SignInSignUp extends Component  {

  signIn() {
    console.log('sign in!')
  }

  render() {
    
    return (
      <button onClick={this.signIn}>Sign In/Sign Up</button>
    )
  }
};

export default SignInSignUp;