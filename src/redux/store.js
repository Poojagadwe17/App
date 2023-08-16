import { createStore } from 'redux';

const initialState = {
  movies: [],
  searchQuery: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
