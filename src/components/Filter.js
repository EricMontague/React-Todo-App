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
              getStyle("btnTransparent") +
              " " +
              (props.filter === option ? getStyle("selected") : "")
            }
            onClick={() => props.setFilter(option)}
          >
            {option}
          </button>
        </li>
      ))}
      {/* <li>
        <button className={props.styling} onClick={props.changeFilter}>
          All
        </button>
      </li>
      <li>
        <button className={props.styling} onClick={props.changeFilter}>
          Active
        </button>
      </li>
      <li>
        <button className={props.styling} onClick={props.changeFilter}>
          Completed
        </button>
      </li> */}
    </ul>
  );
}

export default Filter;
