import React from "react";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

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

export default TodoFormControl;
