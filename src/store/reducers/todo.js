import * as _ from "lodash";
import * as types from "./../types/consts";

const initialState = {
  isEmpty: true,
  allTodo: {},
  customTODO: []
};

const todos = (state = initialState, action) => {
  const newState = _.cloneDeep(state);

  switch (action.type) {
    case types.ADD_TODO:
      const {text, dayId, hour} = action.todoData;

      if (text === '') {
        return state;
      }
      newState.allTodo[dayId] = newState.allTodo[dayId] || {};
      newState.allTodo[dayId][hour] = {
        text,
        done: false
      };
      return newState;
    case types.DELETE_TODO:
      newState.allTodo[action.data.dayId] = _.omit(newState.allTodo[action.data.dayId], action.data.hour);
      return newState;
    case types.DONE_TODO:
      newState.allTodo[action.data.dayId][action.data.hour].done = !newState.allTodo[action.data.dayId][action.data.hour].done;
      return newState;
    case types.SWITCH_TODO_HOUR:
      if (newState.allTodo[action.hours.dayId] && newState.allTodo[action.hours.dayId][action.hours.hour]) {
        newState.allTodo[action.hours.dayId][action.hours.switchHour] = newState.allTodo[action.hours.dayId][action.hours.hour];
        newState.allTodo[action.hours.dayId] = _.omit(newState.allTodo[action.hours.dayId], action.hours.hour);
      }
      return newState;

    case types.CUSTOM_ADD_TODO:
      if (action.todoData.task === '') {
        return state;
      }
      newState.customTODO.push({
        task: action.todoData.task,
        done: false
      });
      return newState;
    case types.CUSTOM_DONE_TODO:
      newState.customTODO[action.num].done = !newState.customTODO[action.num].done;
      return newState;
    case types.CUSTOM_DELETE_TODO:
      _.remove(newState.customTODO, newState.customTODO[action.num]);
      return newState;
    default:
      return state;
  }
};

export default todos;