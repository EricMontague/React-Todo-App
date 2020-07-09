import React from "react";

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

export default TextInput;
