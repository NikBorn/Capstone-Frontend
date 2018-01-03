import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const BandPage = (props) => {

  // console.log(props)

  return (
    <div>
      Yo!
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    searchBandResults: state.searchBandResults
  };
};



export default withRouter(connect(mapStateToProps, null)(BandPage))