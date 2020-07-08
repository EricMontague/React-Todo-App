import { useState } from "react";
import { applyFilter, search } from "../services/filter";

function useFilteredTodoState(initialTodos) {
  const [filteredTodos, setState] = useState(initialTodos);

  const changeFilter = newFilter => {
    const newTodos = applyFilter(filteredTodos, newFilter);
    setState(newTodos);
  };

  const runSearch = newQuery => {
    const newTodos = search(filteredTodos, newQuery);
    setState(newTodos);
  };

  return [filteredTodos, changeFilter, runSearch];
}

export default useFilteredTodoState;
