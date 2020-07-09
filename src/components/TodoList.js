import React from "react";
import SearchBox from "./SearchBox";
import Footer from "./Footer";
import TodoItem from "./TodoItem";
import useInputState from "../hooks/useInputState";
import { applyFilter, search } from "../services/filter";
import useFilterState from "../hooks/useFilterState";

function TodoList({
  todos,
  deleteTodo,
  deleteAllTodos,
  toggleTodoStatus,
  setTodoToEdit,
  todoToEdit
}) {
  const [value, handleChange, handleBlur] = useInputState("");
  const [filter, changeFilter] = useFilterState("All");
  const filteredTodos = search(applyFilter(todos, filter), value);

  return (
    <div className="card">
      <h3 className="card-title-lg">Todo List</h3>
      <SearchBox handleChange={handleChange} handleBlur={handleBlur} />
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
      <Footer
        filter={filter}
        changeFilter={changeFilter}
        handleClick={() => {
          deleteAllTodos();
          if (todoToEdit !== null) {
            setTodoToEdit(null);
          }
        }}
      />
    </div>
  );
}

export default TodoList;
