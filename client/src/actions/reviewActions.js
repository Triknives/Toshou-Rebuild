import axios from 'axios';
import { GET_REVIEWS, ADD_REVIEW, DELETE_REVIEW, REVIEWS_LOADING } from './types';
import { returnErrors} from './errorActions';

export const getReviews = () => dispatch => {
  dispatch(setReviewsLoading());
  axios.get('/api/reviews').then(res =>

    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    }))
  };

export const addReview = (review) => (dispatch, getState) => {
  axios.post('/api/reviews', review).then(res =>
    dispatch({
      type: ADD_REVIEW,
      payload: res.data
    }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  };

export const deleteReview = (id) => (dispatch, getState)=> {
  axios.delete(`/api/reviews/${id}`).then(res =>
    dispatch({
      type:DELETE_REVIEW,
      payload: id,
    }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setReviewsLoading = () => {
  return {
    type: REVIEWS_LOADING
  }
};
