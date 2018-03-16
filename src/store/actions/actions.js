import { ADD_TODO, OPEN_HOUR_MODAL, DELETE_TODO, DONE_TODO, SWITCH_TODO_HOUR } from '../types/consts';

/* TODOS ACTIONS */

export const addToDo = (todoData) => ({
  type: ADD_TODO,
  todoData
});

export const deleteToDo = (data) => ({
  type: DELETE_TODO,
  data
});

export const doneToDo = (data) => ({
  type: DONE_TODO,
  data
});

export const switchToDoHour = (hours) => ({
  type: SWITCH_TODO_HOUR,
  hours
});

/* APPLICATION ACTIONS */

export const toggleHourModal = () => ({
  type: OPEN_HOUR_MODAL
});
