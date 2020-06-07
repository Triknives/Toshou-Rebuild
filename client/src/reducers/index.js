import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import bookReducer from './bookReducer';
import finishedBookReducer from './finishedBookReducer';
import goalReducer from './goalReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
  item: itemReducer,
  review: reviewReducer,
  book: bookReducer,
  finishedBook: finishedBookReducer,
  goal: goalReducer,
  error: errorReducer,
  auth: authReducer,
});
