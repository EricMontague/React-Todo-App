import React from "react";

function Filter({ filter, setFilter }) {
  const options = ["All", "Active", "Completed"];
  return (
    <ul className="filters">
      {options.map(option => (
        <li key={option}>
          <button
            className={
              "btn btn-transparent " + (filter === option ? "selected" : "")
            }
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Filter;
