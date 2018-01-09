import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './signInModal.css';


export default class SignInModal extends Component {

  render() {
    return (
      <div className='outer-modal'>
        <div className='inner-modal'>
          <p className='modal-text'>Please Sign In</p>
          <button onClick={() => this.props.close()}
            className='invoice-input'>
                        Close
          </button>
        </div>
      </div>
    );
  }
}


