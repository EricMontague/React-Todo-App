import React from "react";
import SearchBox from "./SearchBox";
import CardFooter from "./CardFooter";
import Task from "./Task";

function TaskList(props) {
  const labelName = "Search";
  return (
    <div className="card">
      <h3 className="card-title-lg">Task List</h3>
      <SearchBox labelName={labelName} onKeyUp={props.setQuery} />
      <ul className="tasks">
        {props.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            markComplete={props.markComplete}
            deleteTask={props.deleteTask}
            setCurrentTask={props.setCurrentTask}
          />
        ))}
      </ul>
      <CardFooter
        filter={props.filter}
        setFilter={props.setFilter}
        onClick={props.deleteAllTasks}
      />
    </div>
  );
}

export default TaskList;
