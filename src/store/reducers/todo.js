import { ADD_TODO } from './../types/consts';

const initialState = {
  isEmpty: true,
  text: 'hello'
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

export default todos;