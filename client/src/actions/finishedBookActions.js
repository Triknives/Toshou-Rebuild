import axios from 'axios';
import { GET_FINISHEDBOOKS, ADD_FINISHED, DELETE_FINISHED, FINISHED_BOOKS_LOADING } from './types';
import { returnErrors} from './errorActions';


export const getFinishedBooks = () => dispatch =>  {
  dispatch(setFinishedLoading());
  axios.get('/api/finishedBooks').then(res =>

    dispatch({
      type: GET_FINISHEDBOOKS,
      payload: res.data
    })
  )
};
export const addFinishedBook = (finishedBook) => (dispatch, getState) => {
  axios.post('/api/finishedBooks', finishedBook).then(res =>
    dispatch({
      type: ADD_FINISHED,
      payload: res.data
    }))
};

export const deleteFinishedBook = (id) => (dispatch, getState) => {
axios.delete(`/api/finishedBooks/${id}`).then(res =>
  dispatch({
    type: DELETE_FINISHED,
    payload: id,
    })
  )
};

export const setFinishedLoading = () => {
  return {
    type: FINISHED_BOOKS_LOADING,
  }
};
