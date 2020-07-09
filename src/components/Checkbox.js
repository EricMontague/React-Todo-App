import React from "react";

function Checkbox({ handleChange, checked }) {
  return (
    <input checked={checked} type="checkbox" onChange={handleChange}></input>
  );
}

export default Checkbox;
