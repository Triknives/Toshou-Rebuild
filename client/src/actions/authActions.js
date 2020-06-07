import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';



//Load User
export const loadUser = () => async dispatch => { 
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ name, email, password });
  
    try {
      const res = await axios.post('/api/users', body, config);
  
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: REGISTER_FAIL
      });
    }
  };


// Login User
export const login = (email, password) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post('/api/auth', body, config);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

  //LOGOUT / CLEAR PROFILE
  export const logout = ( ) => dispatch => {
    dispatch ({ type: CLEAR_PROFILE });
    dispatch ({ type: LOGOUT });
      
  };






















//OLD VERSION OF TOSHOU AUTH ACTIONS
// import axios from 'axios';
// import { returnErrors } from './errorActions';
// import {
//   USER_LOADED,
//   USER_LOADING,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT_SUCCESS,
//   LOGOUT_FAIL,
//   REGISTER_SUCCESS,
//   REGISTER_FAIL
// } from './types'

// // Check token and load user
// export const loadUser = () => (dispatch, getState) => {
//   //User loading
//   dispatch({ type: USER_LOADING });

//   axios
//     .get('/api/auth/user', tokenConfig(getState))
//     .then(res=>
//     dispatch({
//       type: USER_LOADED,
//       payload: res.data
//   }))
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: AUTH_ERROR
//       });
//     });
// };

// //Register User
// export const register = ({ name, email, password }) => dispatch => {
//   //Headers
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
//   // Request body
//   const body = JSON.stringify({ name, email, password });

//   axios.post('/api/users', body, config)
//     .then(res => dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data
//       }))
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
//       dispatch({
//         type: REGISTER_FAIL,
//       });
//     });
// };

// //Login User

// export const login = ({email, password }) => dispatch => {
//   //Headers
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
//   // Request body
//   const body = JSON.stringify({ email, password });

//   axios.post('/api/auth', body, config)
//     .then(res => dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data
//       }))
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
//       dispatch({
//         type: LOGIN_FAIL,
//       });
//     });
// };


// //Logout User
// export const logout = () => {
//   return {
//     type: LOGOUT_SUCCESS
//   };
// };

// // Setup config, headers and token
// export const tokenConfig = getState => {
//   //Get token from local storage
//   const token = getState().auth.token;

//   //Headers
//   const config = {
//     headers: {
//       'Content-type': 'application/json'
//     }
//   }

//   // If token, add to headers
//   if(token){
//     config.headers['x-auth-token'] = token;
//   }
//   return config;
// }
