import React from "react";
import getStyle from "../utilities/styles";

function Filter(props) {
  const options = ["All", "Active", "Completed"];
  return (
    <ul className="filters">
      {options.map(option => (
        <li key={option}>
          <button
            className={
              getStyle("filterBtn") +
              " " +
              (props.filter === option ? getStyle("selected") : "")
            }
            onClick={() => props.setFilter(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Filter;
