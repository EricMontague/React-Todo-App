import React from "react";
import getStyle from "../utilities/styles";

function TextInput(props) {
  return (
    <div className="form-group" key={props.getDefaultValue()}>
      <input
        id={props.labelName}
        type="text"
        onChange={props.onKeyUp}
        defaultValue={props.getDefaultValue()}
      />
      <label className={props.mode === "Edit" ? getStyle("labelRaised") : ""}>
        {props.labelName}
      </label>
    </div>
  );
}

export default TextInput;
