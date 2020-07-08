import React from "react";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

function TodoFormWrapper({
  addTodo,
  editTodo,
  selectedTodo,
  isEditing,
  toggleFormState,
  setSelectedTodo
}) {
  if (!isEditing) {
    return <AddTodoForm addTodo={addTodo} />;
  } else {
    return (
      <EditTodoForm
        handleClick={() => {
          toggleFormState(false);
          setSelectedTodo(null);
        }}
        editTodo={editTodo}
        selectedTodo={selectedTodo}
      />
    );
  }
}

export default TodoFormWrapper;
