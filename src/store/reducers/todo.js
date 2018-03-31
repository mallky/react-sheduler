import * as _ from "lodash";
import * as types from "./../types/consts";

const initialState = {
  isEmpty: true,
  weekTodo: {},
  customTODO: []
};

const todos = (state = initialState, action) => {
  const newState = _.cloneDeep(state);

  switch (action.type) {
    // For Week
    case types.ADD_TODO:
      const {text, dayId, hour} = action.todoData;

      if (text === '') {
        return state;
      }
      newState.weekTodo[dayId] = newState.weekTodo[dayId] || {};
      newState.weekTodo[dayId][hour] = {
        text,
        done: false
      };
      return newState;
    case types.DELETE_TODO:
      newState.weekTodo[action.data.dayId] = _.omit(newState.weekTodo[action.data.dayId], action.data.hour);
      return newState;
    case types.DONE_TODO:
      newState.weekTodo[action.data.dayId][action.data.hour].done = !newState.weekTodo[action.data.dayId][action.data.hour].done;
      return newState;
    case types.SWITCH_TODO_HOUR:
      if (newState.weekTodo[action.hours.dayId] && newState.weekTodo[action.hours.dayId][action.hours.hour]) {
        newState.weekTodo[action.hours.dayId][action.hours.switchHour] = newState.weekTodo[action.hours.dayId][action.hours.hour];
        newState.weekTodo[action.hours.dayId] = _.omit(newState.weekTodo[action.hours.dayId], action.hours.hour);
      }
      return newState;
    // For Custom Task
    case types.CUSTOM_ADD_TODO:
      if (action.todoData.task === '') {
        return state;
      }
      newState.customTODO.push({
        task: action.todoData.task,
        taskId: action.todoData.taskId,
        done: false
      });
      return newState;
    case types.CUSTOM_DONE_TODO:
      newState.customTODO[action.num].done = !newState.customTODO[action.num].done;
      return newState;
    case types.CUSTOM_DELETE_TODO:
      _.remove(newState.customTODO, newState.customTODO[action.num]);
      return newState;
    case types.CUSTOM_RESET_TODO:
      newState.customTODO = [];
      return newState;
    default:
      return state;
  }
};

export default todos;