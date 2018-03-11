import { ADD_TODO } from '../consts';

export const addToDo = (text) => ({
  type: ADD_TODO,
  text
});
