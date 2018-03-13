import { ADD_TODO, OPEN_HOUR_MODAL } from '../types/consts';

/* TODOS ACTIONS */

export const addToDo = (todo) => ({
  type: ADD_TODO,
  todo
});

/* APPLICATION ACTIONS */

export const toggleHourModal = () => ({
  type: OPEN_HOUR_MODAL
});
