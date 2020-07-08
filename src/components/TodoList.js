import React from "react";
import SearchBox from "./SearchBox";
import Footer from "./Footer";
import TodoItem from "./TodoItem";
import useInputState from "../hooks/useInputState";

function TodoList({
  todos,
  deleteTodo,
  deleteAllTodos,
  toggleTodoStatus,
  setQuery,
  setFilter,
  filter,
  setSelectedTodo,
  toggleFormState,
  selectedTodo
}) {
  const [value, handleChange, handleBlur] = useInputState("");
  return (
    <div className="card">
      <h3 className="card-title-lg">Todo List</h3>
      <SearchBox
        handleChange={() => {
          handleChange();
          setQuery(value);
        }}
        handleBlur={handleBlur}
      />
      <ul className="todos">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            handleEditClick={() => {
              setSelectedTodo(todo);
              toggleFormState(true);
            }}
            handleDeleteClick={() => {
              deleteTodo(id);
              if (selectedTodo.id === id) {
                setSelectedTodo(null);
                toggleFormState(false);
              }
            }}
          />
        ))}
      </ul>
      <Footer
        filter={filter}
        setFilter={setFilter}
        handleClick={deleteAllTodos}
      />
    </div>
  );
}

export default TodoList;
