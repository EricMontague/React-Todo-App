import React from "react";

function Checkbox({ handleChange, completed }) {
  return (
    <input checked={completed} type="checkbox" onChange={handleChange}></input>
  );
}

export default Checkbox;
