import _ from 'lodash';

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_INFOS_PENDING':
      return {
        ...state,
        movies: [],
        pending: true,
      }
    case 'FETCH_MOVIES_INFOS_SUCCESS':
      return {
        ...state,
        movies: action.data,
        pending: false,
      }
    case 'FETCH_MOVIES_GENRE_SUCCESS':
      return {
        ...state,
        genres: action.data,
      }
    default:
      return state;
  }
};

export default moviesReducer;
