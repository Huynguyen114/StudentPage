import { combineReducers } from 'redux';
import students from './student';
import loading from './loading';

const studentReducer = combineReducers({
  students,
  loading
});

export default studentReducer;
