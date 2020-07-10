import React from "react";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";
import PropTypes from "prop-types";

function TodoFormControl({ addTodo, editTodo, todoToEdit, clearEditState }) {
  if (todoToEdit === null) {
    return <AddTodoForm addTodo={addTodo} />;
  } else {
    return (
      <EditTodoForm
        clearEditState={clearEditState}
        editTodo={editTodo}
        todoToEdit={todoToEdit}
      />
    );
  }
}

TodoFormControl.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  todoToEdit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  clearEditState: PropTypes.func.isRequired
};

export default TodoFormControl;
