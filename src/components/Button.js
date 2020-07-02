import React from "react";

function Button(props) {
  return <button className={props.styling}>{props.value}</button>;
}

export default Button;
