import React from "react";
import initialTodos from "../data";
import TodoFormWrapper from "./TodoFormWrapper";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";

function TodoApp() {
  const {
    todos,
    addTodo,
    editTodo,
    deleteTodo,
    deleteAllTodos,
    toggleTodoStatus
  } = useTodoState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useSelectedTodoState(null);
  const [isEditing, toggleFormState] = useFormState(false);
  const [query, setQuery] = useQueryState("");
  const [filter, setFilter] = useFilterState("All");
  const filteredTodos = search(applyFilter(todos, filter), query);
  return (
    <div className="container">
      <TodoFormWrapper
        addTodo={addTodo}
        editTodo={editTodo}
        selectedTodo={selectedTodo}
        isEditing={isEditing}
        toggleFormState={toggleFormState}
        setSelectedTodo={setSelectedTodo}
      />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        deleteAllTodos={deleteAllTodos}
        toggleTodoStatus={toggleTodoStatus}
        setQuery={setQuery}
        setFilter={setFilter}
        filter={filter}
        setSelectedTodo={setSelectedTodo}
        toggleFormState={toggleFormState}
        selectedTodo={selectedTodo}
      />
    </div>
  );
}

export default TodoApp;
