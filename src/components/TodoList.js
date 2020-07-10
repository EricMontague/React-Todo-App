import React from "react";
import Alert from "./Alert";
import SearchBox from "./SearchBox";
import Footer from "./Footer";
import FilteredList from "./FilteredList";
import useInputState from "../hooks/useInputState";
import { applyFilter, search } from "../services/filter";
import useFilterState from "../hooks/useFilterState";
import PropTypes from "prop-types";

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
  let message;
  if (todos.length === 0) {
    message =
      "You have no more items remaining. Fill out the form above to add more.";
  } else if (filteredTodos.length === 0) {
    message = "No items matched your search criteria.";
  }

  return (
    <div className="card">
      <h3 className="card-title-lg">Todo List</h3>
      <SearchBox handleChange={handleChange} handleBlur={handleBlur} />
      {(() => {
        if (message) {
          return <Alert message={message} bgColor="alert-light" />;
        } else {
          return (
            <FilteredList
              filteredTodos={filteredTodos}
              deleteTodo={deleteTodo}
              toggleTodoStatus={toggleTodoStatus}
              setTodoToEdit={setTodoToEdit}
              todoToEdit={todoToEdit}
            />
          );
        }
      })()}
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

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteAllTodos: PropTypes.func.isRequired,
  toggleTodoStatus: PropTypes.func.isRequired,
  setTodoToEdit: PropTypes.func.isRequired,
  todoToEdit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

export default TodoList;
