import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import getStyle from "../utilities/styles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: null,
      mode: "Add",
      filter: "All",
      query: "",
      tasks: [
        { id: 1, description: "Post on social media", isComplete: false },
        {
          id: 2,
          description: "Turn off the air conditioner",
          isComplete: false
        },
        {
          id: 3,
          description: "Change the car's engine oil",
          isComplete: false
        }
      ]
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteAllTasks = this.deleteAllTasks.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.setCurrentTask = this.setCurrentTask.bind(this);
    this.getCurrentTask = this.getCurrentTask.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  handleKeyUp(event) {
    const labelStyle = getStyle("labelRaised");
    if (event.target.value !== "") {
      event.target.nextElementSibling.classList.add(labelStyle);
    } else {
      event.target.nextElementSibling.classList.remove(labelStyle);
    }
  }

  addTask(newTask) {
    const currentTasks = this.state.tasks.slice();
    newTask.id = currentTasks[currentTasks.length - 1].id + 1;
    this.setState({ tasks: [...currentTasks, newTask] });
  }

  updateTask(task) {
    const tasks = this.state.tasks.slice();
    tasks.forEach(taskToUpdate => {
      if (taskToUpdate.id === task.id) {
        taskToUpdate.description = task.description;
      }
    });
    this.setState({ tasks: tasks, mode: "Add", currentTask: null });
  }

  deleteTask(taskID) {
    const tasks = this.state.tasks.slice();
    const newTasks = tasks.filter(task => {
      return task.id !== taskID;
    });
    this.setState({ tasks: newTasks });
  }

  deleteAllTasks() {
    this.setState({ tasks: [] });
  }

  markComplete(taskID) {
    const tasks = this.state.tasks.slice();
    const targetTask = tasks.find(task => {
      return task.id === taskID;
    });
    targetTask.isComplete = !targetTask.isComplete;
    this.setState({ tasks });
  }

  setCurrentTask(taskID) {
    const tasks = this.state.tasks;
    const currentTask = tasks.find(task => {
      return task.id === taskID;
    });
    this.setState({ currentTask: currentTask, mode: "Edit" });
  }

  getCurrentTask() {
    const currentTask = this.state.currentTask;
    if (currentTask !== null) {
      return currentTask.description;
    }
    return null;
  }

  filterTasks() {
    const tasks = this.state.tasks.slice();
    const searchResults = tasks.filter(task => {
      return task.description.toLowerCase().includes(this.state.query);
    });
    if (this.state.filter === "All") {
      return searchResults;
    }
    if (this.state.filter === "Active") {
      return searchResults.filter(task => !task.isComplete);
    }
    if (this.state.filter === "Completed") {
      return searchResults.filter(task => task.isComplete);
    }
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  setQuery(event) {
    this.handleKeyUp(event);
    const query = event.target.value.toLowerCase();
    this.setState({ query });
  }

  render() {
    return (
      <div className="container">
        <AddTask
          onKeyUp={this.handleKeyUp}
          addTask={this.addTask}
          updateTask={this.updateTask}
          mode={this.state.mode}
          currentTask={() => this.getCurrentTask()}
        />
        <TaskList
          tasks={this.filterTasks()}
          markComplete={this.markComplete}
          deleteTask={this.deleteTask}
          deleteAllTasks={this.deleteAllTasks}
          setCurrentTask={this.setCurrentTask}
          setFilter={this.setFilter}
          filter={this.state.filter}
          setQuery={this.setQuery}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default App;
