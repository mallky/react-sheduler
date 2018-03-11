import { ADD_TODO } from './../consts';
import { combineReducers } from 'redux';

const initialState = {
  isEmpty: true,
  text: 'hello'
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        text: action.text
      });
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos
});

export default todoApp;