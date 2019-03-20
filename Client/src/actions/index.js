//import { ADD_POST, DELETE_POST, FETCH_POST } from './types';
import { LOGIN, LOGOUT, REGISTER, USERNAME_CHECK, ADD_TODO, FETCH_TODO, DELETE_TODO,LOGIN_FAILURE, LOGIN_SUCCESS } from './types';

import axios from 'axios';

const apiUrl = 'http://localhost:8080';

export const login = ({ user }) => {
    console.log(`action ${JSON.stringify(user)}`);
    
    return (dispatch) => {
      return axios.post(`${apiUrl}/api/user/auth`, { user })
        .then(response => {
          dispatch(loginSuccess(response.data))
        })
        .catch(error => {
          dispatch(loginFailure(error))
          throw(error);
        });
    };
};

export const loginSuccess =  (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: data.token,
      UserName: data.UserName,
      TeamId: data.teamId
    }
  }
};

export const loginFailure =  () => {
    return {
      type: LOGIN_FAILURE,
      payload: {
        loginStatus: true
      }
    }
  };
  

// export const createPost = ({ title, body }) => {
//   return (dispatch) => {
//     return axios.post(`${apiUrl}/add`, {title, body})
//       .then(response => {
//         dispatch(createPostSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

// export const createPostSuccess =  (data) => {
//   return {
//     type: ADD_POST,
//     payload: {
//       _id: data._id,
//       title: data.title,
//       body: data.body
//     }
//   }
// };

// export const deletePostSuccess = id => {
//   return {
//     type: DELETE_POST,
//     payload: {
//       id
//     }
//   }
// }

// export const deletePost = id => {
//   return (dispatch) => {
//     return axios.get(`${apiUrl}/delete/${id}`)
//       .then(response => {
//         dispatch(deletePostSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

// export const fetchPosts = (posts) => {
//   return {
//     type: FETCH_POST,
//     posts
//   }
// };

// export const fetchAllPosts = () => {
//   return (dispatch) => {
//     return axios.get(apiUrl)
//       .then(response => {
//         dispatch(fetchPosts(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };