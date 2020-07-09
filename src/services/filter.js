const FILTER_ALL = "All";
const FILTER_COMPLETED = "Completed";
const FILTER_ACTIVE = "Active";

export function applyFilter(todos, filter) {
  switch (filter) {
    case FILTER_COMPLETED:
      return todos.filter(todo => todo.completed);
    case FILTER_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

export function search(todos, query) {
  const formattedQuery = query.trim().toLowerCase();
  return todos.filter(todo =>
    todo.title.toLowerCase().includes(formattedQuery)
  );
}

export function getOptions() {
  return [FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE];
}
