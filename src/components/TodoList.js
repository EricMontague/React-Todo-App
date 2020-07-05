import React from "react";
import SearchBox from "./SearchBox";
import CardFooter from "./CardFooter";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const labelName = "Search";
  return (
    <div className="card">
      <h3 className="card-title-lg">Todo List</h3>
      <SearchBox labelName={labelName} onKeyUp={props.setQuery} />
      <ul className="todos">
        {props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={props.markComplete}
            deleteTodo={props.deleteTodo}
            setCurrentTodo={props.setCurrentTodo}
          />
        ))}
      </ul>
      <CardFooter
        filter={props.filter}
        setFilter={props.setFilter}
        onClick={props.deleteAllTodos}
      />
    </div>
  );
}

export default TodoList;
