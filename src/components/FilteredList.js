import React from "react";
import TodoItem from "./TodoItem";

function FilteredList({
  filteredTodos,
  deleteTodo,
  toggleTodoStatus,
  setTodoToEdit,
  todoToEdit
}) {
  return (
    <ul className="todos">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodoStatus={toggleTodoStatus}
          handleEditClick={() => setTodoToEdit(todo)}
          handleDeleteClick={() => {
            deleteTodo(todo.id);
            // Clear the edit state if the deleted todo is currently
            // showing in the form
            if (todoToEdit !== null && todoToEdit.id === todo.id) {
              setTodoToEdit(null);
            }
          }}
        />
      ))}
    </ul>
  );
}

export default FilteredList;
