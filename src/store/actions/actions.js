import { ADD_TODO, OPEN_HOUR_MODAL, DELETE_TODO, DONE_TODO, SWITCH_TODO_HOUR } from '../types/consts';

/* TODOS ACTIONS */

export const addToDo = (todoData) => ({
  type: ADD_TODO,
  todoData
});

export const deleteToDo = (hour) => ({
  type: DELETE_TODO,
  hour
});

export const doneToDo = (hour) => ({
  type: DONE_TODO,
  hour
});

export const switchToDoHour = (hours) => ({
  type: SWITCH_TODO_HOUR,
  hours
});

/* APPLICATION ACTIONS */

export const toggleHourModal = () => ({
  type: OPEN_HOUR_MODAL
});
