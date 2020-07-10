import React from "react";
import PropTypes from "prop-types";

function Checkbox({ handleChange, checked }) {
  return (
    <input checked={checked} type="checkbox" onChange={handleChange}></input>
  );
}

Checkbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Checkbox;
