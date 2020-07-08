import React from "react";

function Filter({ handleChange }) {
  const [filter, setFilter] = useFilterState("All");
  const options = ["All", "Active", "Completed"];
  return (
    <ul className="filters">
      {options.map(option => (
        <li key={option}>
          <button
            className={
              "btn btn-transparent " + (filter === option ? "selected" : "")
            }
            onClick={() => {
              setFilter(option);
              handleChange(filter);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Filter;
