import React, { useState, useEffect, useContext } from "react";
import Checkbox from "./CheckBox";
import deleteIcon from "../images/icon-cross.svg";

import CrudContext from "../context/crudContext";

const ListTodos = () => {
  const { getAllTodos, todos, deleteTodo, updateTodo } = useContext(
    CrudContext
  );

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  const [filter, setFilter] = useState(filterOptions[0]);

  const getFilteredTodos = () => {
    switch (filter.value) {
      case "all":
        return todos;

      case "active":
        return todos.filter(({ checked }) => !checked);

      case "completed":
        return todos.filter(({ checked }) => checked);

      default:
        return;
    }
  };

  const filteredTodos = getFilteredTodos();

  useEffect(() => {
    getAllTodos();
  }, []);

  const deleteSingleTodo = (id) => {
    deleteTodo(id);
  };

  const toggleTodo = (id, checked) => {
    updateTodo(id, { checked });
    window.location = "/";
  };

  const clearCompleated = () => {
    todos.forEach((todo) => {
      todo.checked && deleteTodo(todo.todo_id);
    });
  };

  return (
    <>
      {todos.length > 0 ? (
        <div className="list">
          {filteredTodos.map((todo) => (
            <div className="list__control flex-between" key={todo.todo_id}>
              <div>
                <Checkbox
                  checked={todo.checked}
                  onClick={() => toggleTodo(todo.todo_id, !todo.checked)}
                />
                <p className={`todo__text ${todo.checked ? "isChecked" : ""}`}>
                  {todo.description}
                </p>
              </div>
              <img
                src={deleteIcon}
                alt="Delete Todo"
                className="delete__icon"
                onClick={() => deleteSingleTodo(todo.todo_id)}
              />
            </div>
          ))}
          <div className="list__actions flex-between">
            <button className="list-btn">{todos.length} Items left</button>

            <div className="list__menu hide-mobile flex-center ">
              {filterOptions.map((filterOption) => (
                <button
                  key={filterOption.value}
                  className={`list-btn ${
                    filter.value === filterOption.value ? "active" : ""
                  }`}
                  onClick={() => setFilter(filterOption)}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>

            <button className="list-btn" onClick={clearCompleated}>
              Clear Compleated
            </button>
          </div>
        </div>
      ) : (
        <div className="list">
          <h1>No Todos. Create one!</h1>
        </div>
      )}
      <div className="list__menu hide-desktop flex-center">
        {filterOptions.map((filterOption) => (
          <button
            key={filterOption.value}
            className={`list-btn ${
              filter.value === filterOption.value ? "active" : ""
            }`}
            onClick={() => setFilter(filterOption)}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default ListTodos;
