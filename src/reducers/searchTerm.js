const searchTerm = (state='', action) => {
  switch (action.type) {
  case 'SET_SEARCH_TERM':
    console.log('reducer!')
    return action.searchTerm;
  default:
    return state;
  }
}

export default searchTerm;