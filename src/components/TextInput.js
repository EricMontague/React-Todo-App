import React from "react";

function TextInput(props) {
  return (
    <div class="form-group">
      <input type="text" />
      <label>{props.labelName}</label>
    </div>
  );
}

export default TextInput;
