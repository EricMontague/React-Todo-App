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
  const [todoToEdit, setEditState] = useEditState(null);

  return (
    <div className="container">
      <TodoFormWrapper
        addTodo={addTodo}
        editTodo={editTodo}
        todoToEdit={todoToEdit}
        clearEditState={() => setEditState(null)}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        deleteAllTodos={deleteAllTodos}
        toggleTodoStatus={toggleTodoStatus}
        setEditState={setEditState}
        todoToEdit={todoToEdit}
      />
    </div>
  );
}

export default TodoApp;
