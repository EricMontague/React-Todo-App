import React from "react";
import { getOptions } from "../services/filter";

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

export default Filter;
