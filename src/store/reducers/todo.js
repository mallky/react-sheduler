import * as _ from 'lodash';
import { ADD_TODO, DELETE_TODO, DONE_TODO, SWITCH_TODO_HOUR } from './../types/consts';

const initialState = {
  isEmpty: true,
  allTodo: {}
};

const todos = (state = initialState, action) => {
  const newState = _.cloneDeep(state);

  switch (action.type) {
    case ADD_TODO:
      const {text, dayId, hour} = action.todoData;

      if (text === '') {
        return state;
      }

      newState.allTodo[hour] = {
        text,
        done: false
      };
      return newState;
    case DELETE_TODO:
      newState.allTodo = _.omit(newState.allTodo, action.hour);
      return newState;
    case DONE_TODO:
      newState.allTodo[action.hour].done = !newState.allTodo[action.hour].done;
      return newState;
    case SWITCH_TODO_HOUR:
      if (newState.allTodo[action.hours.hour]) {
        newState.allTodo[action.hours.switchHour] = newState.allTodo[action.hours.hour];
        newState.allTodo = _.omit(newState.allTodo, action.hours.hour);
      }
      return newState;
    default:
      return state;
  }
};

export default todos;