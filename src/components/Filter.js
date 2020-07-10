import React from "react";
import { getOptions } from "../services/filter";
import PropTypes from "prop-types";

function Filter({ filter, handleChange }) {
  const options = getOptions();
  return (
    <ul className="filters">
      {options.map(option => (
        <li key={option}>
          <button
            className={
              "btn btn-transparent " + (filter === option ? "selected" : "")
            }
            onClick={() => handleChange(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Filter;
