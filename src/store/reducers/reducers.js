import { combineReducers } from 'redux';
import todos from './todo';
import application from './application';

const todoApp = combineReducers({
  todos,
  application
});

export default todoApp;