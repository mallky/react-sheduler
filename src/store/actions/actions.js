import * as types from "../types/consts";

/* TODOS ACTIONS */

export const addToDo = (todoData) => ({
  type: types.ADD_TODO,
  todoData
});

export const deleteToDo = (data) => ({
  type: types.DELETE_TODO,
  data
});

export const doneToDo = (data) => ({
  type: types.DONE_TODO,
  data
});

export const switchToDoHour = (hours) => ({
  type: types.SWITCH_TODO_HOUR,
  hours
});

/* Custom todos ACTIONS */


export const customAddToDo = (todoData) => ({
  type: types.CUSTOM_ADD_TODO,
  todoData
});

export const customDeleteToDo = (num) => ({
  type: types.CUSTOM_DELETE_TODO,
  num
});

export const customDoneToDo = (num) => ({
  type: types.CUSTOM_DONE_TODO,
  num
});