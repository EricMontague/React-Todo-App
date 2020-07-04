import React from "react";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getStyle from "../utilities/styles";

function Task(props) {
  const { id, description, isComplete } = props.task;
  return (
    <li>
      <div className={isComplete ? getStyle("complete") : ""}>
        <Checkbox
          checked={isComplete}
          onChange={() => props.markComplete(id)}
        />
        {description}
      </div>
      <div className="icon-group">
        <FontAwesomeIcon
          icon={["fas", "edit"]}
          onClick={() => props.setCurrentTask(id)}
        />
        <FontAwesomeIcon
          icon={["fas", "trash-alt"]}
          onClick={() => props.deleteTask(id)}
        />
      </div>
    </li>
  );
}

export default Task;
