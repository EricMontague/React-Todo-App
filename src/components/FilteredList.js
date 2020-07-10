import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

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

FilteredList.propTypes = {
  filteredTodos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoStatus: PropTypes.func.isRequired,
  setTodoToEdit: PropTypes.func.isRequired,
  todoToEdit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

export default FilteredList;
