import React, { Component } from 'react';
import { auth, provider } from '../../firebase';
import { signedInUser } from '../../actions/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './SignInSignUp.css';


class SignInSignUp extends Component  {
  
  signInUserToStore (response) {
    response.json()
      .then(parsed => {
        const user = {
          id: parsed[0].id,
          email: parsed[0].email,
          name: parsed[0].name,
          preferredLocation: parsed[0].preferredLocation
        };
        this.props.signedInUser(user);
      });
  }

  postUserToDB (result) {
    const newUser = {
      name: result.user.displayName,
      email: result.user.email
    };
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
      })
      .then(parsed => {
        const user = {
          id: parsed[0].id,
          email: parsed[0].email,
          name: parsed[0].name,
          preferredLocation: parsed[0].preferredLocation
        };
        this.props.signedInUser(user);
      });
  }

  signIn() {
    auth.signInWithPopup(provider)
      .then((result) => {
        fetch(`http://localhost:3000/api/v1/users/email${result.user.email}`)
          .then(response => {
            if (response.status === 200){
              this.signInUserToStore(response);
            } else {
              this.postUserToDB(result);
            }
          });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <button className='SignInSignUp-button' onClick={this.signIn.bind(this)}>Sign In</button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signedInUser: (user) => {
      dispatch(signedInUser(user));
    }
  };
};

SignInSignUp.propTypes = {
  signedInUser: PropTypes.func
};


export default withRouter(connect(null, mapDispatchToProps)(SignInSignUp));