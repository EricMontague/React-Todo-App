import { useState } from "react";

function useEditState(initialState) {
  const [todoToEdit, setTodo] = useState(initialState);

  const setTodoToEdit = todo => {
    setTodo(todo);
  };

  return [todoToEdit, setTodoToEdit];
}

export default useEditState;
