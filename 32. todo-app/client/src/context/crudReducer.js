import { GET_ALL_TODOS, DELETE_TODO, UPDATE_TODO, CREATE_TODO } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.todo_id === action.payload.todo_id ? action.payload : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.todo_id !== action.payload),
      };

    default:
      return state;
  }
};
