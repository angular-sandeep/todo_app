import { LOGIN, LOGOUT, REGISTER, USERNAME_CHECK } from '../actions/types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case LOGIN:
      return [...state, action.payload];
    case LOGOUT:
      return state;
    case REGISTER:
      return state;
    case USERNAME_CHECK:
      return state;
    default:
      return state;
  }
}