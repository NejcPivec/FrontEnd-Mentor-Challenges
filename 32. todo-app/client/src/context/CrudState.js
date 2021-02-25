import React, { useReducer } from "react";
import axios from "axios";
import CrudContext from "./crudContext";
import crudReducer from "./crudReducer";
import { GET_ALL_TODOS, DELETE_TODO, UPDATE_TODO, CREATE_TODO } from "./types";

const CrudState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(crudReducer, initialState);

  // Get all todos from database
  const getAllTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/todos");
      dispatch({
        type: GET_ALL_TODOS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Add new todo
  const addTodo = async (todo) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const res = await axios.post("http://localhost:5000/todos", todo, config);
      dispatch({
        type: CREATE_TODO,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Update todo - checked
  const updateTodo = async (id, todo) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const check = JSON.stringify(todo);

    try {
      const res = await axios.put(
        `http://localhost:5000/todos/${id}`,
        check,
        config
      );
      dispatch({
        type: UPDATE_TODO,
        payload: res.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CrudContext.Provider
      value={{
        todos: state.todos,
        getAllTodos,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};

export default CrudState;
