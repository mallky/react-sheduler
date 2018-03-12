import { ADD_TODO, OPEN_HOUR_MODAL } from '../types/consts';

/* TODOS ACTIONS */

export const addToDo = (text) => ({
  type: ADD_TODO,
  text
});

/* APPLICATION ACTIONS */

export const toggleHourModal = () => ({
  type: OPEN_HOUR_MODAL
});
