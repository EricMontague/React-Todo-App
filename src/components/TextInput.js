import React from "react";
import PropTypes from "prop-types";

function TextInput({
  handleChange,
  handleBlur,
  value,
  inputName,
  labelName,
  labelClassName
}) {
  return (
    <div className="form-group">
      <input
        name={inputName}
        type="text"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label className={labelClassName !== null ? labelClassName : ""}>
        {labelName}
      </label>
    </div>
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  labelClassName: PropTypes.string // Optional
};

export default TextInput;
