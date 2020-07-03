import React from "react";

function Button(props) {
  if (props.btnType === "submit") {
    return (
      <button type={props.btnType} className={props.styling}>
        {props.value}
      </button>
    );
  } else {
    return (
      <button
        type={props.btnType}
        className={props.styling}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  }
}

export default Button;
