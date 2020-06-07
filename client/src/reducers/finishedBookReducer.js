import { GET_FINISHEDBOOKS, ADD_FINISHED, DELETE_FINISHED, FINISHED_BOOKS_LOADING } from '../actions/types';


const initialState = {
  finishedBooks: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_FINISHEDBOOKS:
    return {
      ...state,
      finishedBooks: action.payload,
      loading: false
    };
    case ADD_FINISHED:
    return {
      ...state,
      finishedBooks: [action.payload, ...state.finishedBooks]
    };
    case DELETE_FINISHED:
      return {
        ...state,
          finishedBooks: state.finishedBooks.filter(finishedBook => finishedBook._id !== action.payload)
      }
      case FINISHED_BOOKS_LOADING:
       return {
         ...state,
         loading: true
       };
    default:
      return state;
  }
}
