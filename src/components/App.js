import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  render() {
    return (
      <div className="container">
        <AddTodo />
        <TodoList />
        {/* <FontAwesomeIcon icon={["fas", "edit"]} /> */}
      </div>
    );
  }
}

export default App;
