import React from "react";
import getStyle from "../utilities/styles";

function TextInput(props) {
  return (
    <div className="form-group">
      <input
        name={props.inputName}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
      <label className={props.mode === "Edit" ? getStyle("labelRaised") : ""}>
        {props.labelName}
      </label>
    </div>
  );
}

export default TextInput;
