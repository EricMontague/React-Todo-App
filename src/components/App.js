import React from "react";
import TodoApp from "./TodoApp";

function App() {
  return <TodoApp />;
}

export default App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: null,
      mode: "Add",
      filter: "All",
      query: ""
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.deleteAllTodos = this.deleteAllTodos.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.setCurrentTodo = this.setCurrentTodo.bind(this);
    this.getCurrentTodo = this.getCurrentTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  handleKeyUp(input) {
    const labelStyle = getStyle("labelRaised");
    if (input.value !== "") {
      input.nextElementSibling.classList.add(labelStyle);
    } else {
      input.nextElementSibling.classList.remove(labelStyle);
    }
  }

  addTodo(newTodo) {
    const currentTodos = this.state.todos.slice();
    newTodo.id = currentTodos[currentTodos.length - 1].id + 1;
    newTodo.completed = false;
    this.setState({ todos: [...currentTodos, newTodo] });
  }

  updateTodo(todo) {
    const todos = this.state.todos.map(todoToUpdate => {
      if (todoToUpdate.id === this.state.currentTodo.id) {
        todoToUpdate.title = todo.title;
      }
      return todoToUpdate;
    });
    this.setState({ todos: todos, mode: "Add", currentTodo: null });
  }

  deleteTodo(todoID) {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== todoID;
    });
    if (
      this.state.currentTodo !== null &&
      this.state.currentTodo.id === todoID
    ) {
      this.setState({ todos: newTodos, mode: "Add", currentTodo: null });
    } else {
      this.setState({ todos: newTodos });
    }
  }

  deleteAllTodos() {
    this.setState({ todos: [], mode: "Add", currentTodo: null });
  }

  markComplete(todoID) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === todoID) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos });
  }

  setCurrentTodo(todoID) {
    const currentTodo = this.state.todos.find(todo => {
      return todo.id === todoID;
    });
    this.setState({ currentTodo: currentTodo, mode: "Edit" });
  }

  getCurrentTodo() {
    const currentTodo = this.state.currentTodo;
    if (currentTodo !== null) {
      return currentTodo.title;
    }
    return "";
  }

  filterTodos() {
    const searchResults = this.state.todos.filter(todo => {
      return todo.title.toLowerCase().includes(this.state.query);
    });
    if (this.state.filter === "All") {
      return searchResults;
    }
    if (this.state.filter === "Active") {
      return searchResults.filter(todo => !todo.completed);
    }
    if (this.state.filter === "Completed") {
      return searchResults.filter(todo => todo.completed);
    }
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  setQuery(event) {
    this.handleKeyUp(event.target);
    const query = event.target.value.toLowerCase();
    this.setState({ query });
  }

  cancelUpdate() {
    this.setState({ mode: "Add", currentTodo: null });
  }

  render() {
    return (
      <div className="container">
        <AddTodoForm
          onKeyUp={this.handleKeyUp}
          addTodo={this.addTodo}
          updateTodo={this.updateTodo}
          mode={this.state.mode}
          currentTodo={this.getCurrentTodo()}
          cancelUpdate={this.cancelUpdate}
        />
        <TodoList
          todos={this.filterTodos()}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
          deleteAllTodos={this.deleteAllTodos}
          setCurrentTodo={this.setCurrentTodo}
          setFilter={this.setFilter}
          filter={this.state.filter}
          setQuery={this.setQuery}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
