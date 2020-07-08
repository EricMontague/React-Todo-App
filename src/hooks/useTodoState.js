import { useLocalStorageState } from "./useLocalStorageState";
import uuid from "uuid/v4";

function useTodoState(initialState) {
  const [todos, setTodos] = useLocalStorageState("todos", initialState);

  return {
    todos,
    addTodo: newTodoTitle => {
      setTodos([
        ...todos,
        { id: uuid(), title: newTodoTitle, completed: false }
      ]);
    },
    editTodo: (todoToEdit, newTitle) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoToEdit.id ? { ...todo, title: newTitle } : todo;
      });
      setTodos(updatedTodos);
    },
    deleteTodo: todoToDelete => {
      const updatedTodos = todos.filter(todo => todo.id !== todoToDelete.id);
      setTodos(updatedTodos);
    },
    deleteAllTodos: () => {
      setTodos([]);
    },
    toggleTodoStatus: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    }
  };
}

export default useTodoState;
