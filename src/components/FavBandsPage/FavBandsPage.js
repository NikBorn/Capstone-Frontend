import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavBandCard from '../FavBandCard/FavBandCard';

class FavBandsPage extends Component {

  render() {
    const favBands = this.props.favoriteBands.map(band=> {
      return <FavBandCard key={band.id} bandName={band.bandName}/>;
    });
    return (
      <div>
        {favBands}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBands: state.favoriteBands
  };
};

export default connect(mapStateToProps, null)(FavBandsPage);