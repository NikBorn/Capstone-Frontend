import React, { Component } from 'react';
import { auth, provider } from '../../firebase';

class SignInSignUp extends Component  {

  signIn() {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.email)
        fetch(`http://localhost:3000/api/v1/users/${result.user.email}`)
          .then(response => response.json())
          .then(parsed => console.log(parsed))
      })
      .catch(error => console.log(error))
  }

  render() {
    
    return (
      <button onClick={this.signIn}>Sign In/Sign Up</button>
    )
  }
};

export default SignInSignUp;