import { GET_REVIEWS, ADD_REVIEW, DELETE_REVIEW, REVIEWS_LOADING } from '../actions/types';

const initialState = {
  reviews: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_REVIEWS:
    return {
      ...state,
      reviews: action.payload,
      loading: false
    };
    case ADD_REVIEW:
    return{
      ...state,
      reviews: [action.payload, ...state.reviews]
    };
    case DELETE_REVIEW:
      return {
        ...state,
          reviews: state.reviews.filter(review => review._id !== action.payload)
        };
    case REVIEWS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
