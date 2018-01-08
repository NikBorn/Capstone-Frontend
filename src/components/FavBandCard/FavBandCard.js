import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const FavBandCard = (props) => {
  return (
    <div>
      <h3>{props.bandName}</h3>
      <button>
        search
      </button>
    </div>
  )
}

export default FavBandCard;