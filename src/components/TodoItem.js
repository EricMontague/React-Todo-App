import React from "react";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getStyle from "../utilities/styles";
import PropTypes from "prop-types";

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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
  }),
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setCurrentTodo: PropTypes.func.isRequired
};

export default TodoItem;
