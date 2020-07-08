import React from "react";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

function TodoFormWrapper({ addTodo, editTodo, todoToEdit, clearEditState }) {
  if (todoToEdit === null) {
    return <AddTodoForm addTodo={addTodo} />;
  } else {
    return (
      <EditTodoForm
        handleClick={clearEditState}
        editTodo={editTodo}
        todoToEdit={todoToEdit}
      />
    );
  }
}

export default TodoFormWrapper;
