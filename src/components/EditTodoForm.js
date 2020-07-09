import React from "react";
import TextInput from "./TextInput";
import useInputState from "../hooks/useInputState";

function EditTodoForm({ clearEditState, editTodo, todoToEdit }) {
  const [value, handleChange, handleBlur, clear] = useInputState("");

  return (
    <div className="card">
      <h3 className="card-title-lg">Edit Todo</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (value !== "") {
            editTodo(todoToEdit.id, value);
            clear();
            clearEditState();
          }
        }}
      >
        <TextInput
          labelName="Current Todo"
          inputName="title"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={value === "" ? todoToEdit.title : value}
          labelClassName="label-raised"
        />
        <button type="submit" className="btn btn-primary">
          Update Todo
        </button>
        <button
          type="button"
          className="btn btn-light m-left-1"
          onClick={clearEditState}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditTodoForm;
