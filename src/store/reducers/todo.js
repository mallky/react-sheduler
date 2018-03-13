import { ADD_TODO } from './../types/consts';

const initialState = {
  isEmpty: true,
  todo: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: action.todo
      };
    default:
      return state;
  }
};

export default todos;