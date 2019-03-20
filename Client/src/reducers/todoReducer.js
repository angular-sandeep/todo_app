import { ADD_TODO, DELETE_TODO, FETCH_TODO } from '../actions/types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state
    case FETCH_TODO:
      return state;
    default:
      return state;
  }
}