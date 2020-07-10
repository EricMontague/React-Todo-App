import React from "react";
import useInputState from "../hooks/useInputState";
import TextInput from "./TextInput";
import PropTypes from "prop-types";

function AddTodoForm({ addTodo }) {
  const [value, handleChange, handleBlur, clear] = useInputState("");
  return (
    <div className="card">
      <h3 className="card-title-lg">Add Todo</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (value !== "") {
            addTodo(value);
            clear();
          }
        }}
      >
        <TextInput
          labelName="New Todo"
          inputName="title"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={value}
        />
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodoForm;
