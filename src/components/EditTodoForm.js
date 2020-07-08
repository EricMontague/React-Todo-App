import React from "react";
import useInputState from "../hooks/useInputState";

function EditTodoForm({ handleClick, editTodo, todoToEdit }) {
  const [value, handleChange, handleBlur, clear] = useInputState(
    todoToEdit.title
  );
  return (
    <div className="card">
      <h3 className="card-title-lg">Edit Todo</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
          editTodo(value);
          clear();
        }}
      >
        <TextInput
          labelName="Current Todo"
          inputName="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          labelStyle="label-raised"
        />
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
        <button
          type="button"
          className="btn btn-light m-left"
          onClick={handleClick}
        >
          Edit Todo
        </button>
      </form>
    </div>
  );
}

export default EditTodoForm;
