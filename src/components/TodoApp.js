import React from "react";
import initialTodos from "../data";
import TodoFormControl from "./TodoFormControl";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";
import useEditState from "../hooks/useEditState";

function TodoApp() {
  const {
    todos,
    addTodo,
    editTodo,
    deleteTodo,
    deleteAllTodos,
    toggleTodoStatus
  } = useTodoState(initialTodos);
  const [todoToEdit, setTodoToEdit] = useEditState(null);
  return (
    <div className="container">
      <TodoFormControl
        addTodo={addTodo}
        editTodo={editTodo}
        todoToEdit={todoToEdit}
        clearEditState={() => setTodoToEdit(null)}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        deleteAllTodos={deleteAllTodos}
        toggleTodoStatus={toggleTodoStatus}
        setTodoToEdit={setTodoToEdit}
        todoToEdit={todoToEdit}
      />
    </div>
  );
}

export default TodoApp;
