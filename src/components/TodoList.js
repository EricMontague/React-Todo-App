import React from "react";
import SearchBox from "./SearchBox";
import Footer from "./Footer";
import TodoItem from "./TodoItem";
import useInputState from "../hooks/useInputState";
import useFilteredTodoState from "../hooks/useFilteredTodosState";

function TodoList({
  todos,
  deleteTodo,
  deleteAllTodos,
  toggleTodoStatus,
  setEditState,
  todoToEdit
}) {
  const [value, handleChange, handleBlur] = useInputState("");
  const [filteredTodos, applyFilter, search] = useFilteredTodoState(todos);

  return (
    <div className="card">
      <h3 className="card-title-lg">Todo List</h3>
      <SearchBox
        handleChange={() => {
          handleChange();
          search(value);
        }}
        handleBlur={handleBlur}
      />
      <ul className="todos">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            handleEditClick={() => setEditState(todo)}
            handleDeleteClick={() => {
              deleteTodo(todo.id);
              if (todoToEdit.id === todo.id) {
                setEditState(null);
              }
            }}
          />
        ))}
      </ul>
      <Footer applyFilter={applyFilter} handleClick={deleteAllTodos} />
    </div>
  );
}

export default TodoList;
