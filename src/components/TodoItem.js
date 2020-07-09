import React from "react";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function TodoItem({
  todo,
  toggleTodoStatus,
  handleEditClick,
  handleDeleteClick
}) {
  const { id, title, completed } = todo;
  return (
    <li>
      <div className={completed ? "completed" : ""}>
        <Checkbox
          checked={completed}
          handleChange={() => toggleTodoStatus(id)}
        />
        {title}
      </div>
      <div className="icon-group">
        <FontAwesomeIcon icon={["fas", "edit"]} onClick={handleEditClick} />
        <FontAwesomeIcon
          icon={["fas", "trash-alt"]}
          onClick={handleDeleteClick}
        />
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  toggleTodoStatus: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired
};

export default TodoItem;
