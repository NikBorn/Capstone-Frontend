
/* eslint-disable */

const fetchSearchBand = (bandName) => {
  return phq.events.search(
    {
      'q': `${bandName}`
    }
  )
    .then((results) => {
      console.log(results.result.results);
      this.props.setSearchBandResults(results.result.results);
    })
    .catch(error => console.log(error));
};