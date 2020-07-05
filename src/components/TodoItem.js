import React from "react";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getStyle from "../utilities/styles";

function TodoItem(props) {
  const { id, description, isComplete } = props.todo;
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
          onClick={() => props.setCurrentTodo(id)}
        />
        <FontAwesomeIcon
          icon={["fas", "trash-alt"]}
          onClick={() => props.deleteTodo(id)}
        />
      </div>
    </li>
  );
}

export default TodoItem;
