import React from "react";
import SearchBox from "./SearchBox";
import Footer from "./Footer";
import TodoItem from "./TodoItem";
import useInputState from "../hooks/useInputState";
import useQueryState from "../hooks/useQueryState";
import useFilterState from "../hooks/useFilterState";
import { applyFilter, search } from "../utilities/filter";

function TodoList({
  todos,
  deleteTodo,
  deleteAllTodos,
  toggleTodoStatus,
  setEditState,
  todoToEdit
}) {
  const [value, handleChange, handleBlur] = useInputState("");
  const [query, setQuery] = useQueryState("");
  const [filter, setFilter] = useFilterState("All");
  const filteredTodos = search(applyFilter(todos, filter), query);
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
      <Footer
        filter={filter}
        setFilter={setFilter}
        handleClick={deleteAllTodos}
      />
    </div>
  );
}

export default TodoList;
