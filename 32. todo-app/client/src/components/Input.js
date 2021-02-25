import React, { useState, useContext } from "react";
import CrudContext from "../context/crudContext";
import Checkbox from "../components/CheckBox";

const Input = () => {
  const { addTodo } = useContext(CrudContext);

  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo({ description, checked });
    setDescription("");
    setChecked(false);
  };

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <form className="form-control" onSubmit={onSubmit}>
      <Checkbox checked={checked} onClick={toggleChecked} />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="input-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};

export default Input;
