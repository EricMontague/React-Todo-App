import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

function useTodoState(initialState) {
  const [todos, setTodos] = useLocalStorageState("todos", initialState);

  return {
    todos,
    addTodo: newTodoTitle => {
      setTodos([
        ...todos,
        { id: uuidv4(), title: newTodoTitle, completed: false }
      ]);
    },
    editTodo: (todoId, newTitle) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId ? { ...todo, title: newTitle } : todo;
      });
      setTodos(updatedTodos);
    },
    deleteTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
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
