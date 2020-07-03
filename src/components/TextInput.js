import React from "react";

function TextInput(props) {
  return (
    <div className="form-group">
      <input
        id={props.labelName}
        type="text"
        onKeyUp={props.onKeyUp}
        value={props.getValue()}
      />
      <label>{props.labelName}</label>
      <small>{props.errorMessage !== "" ? props.errorMessage : ""}</small>
    </div>
  );
}

export default TextInput;
