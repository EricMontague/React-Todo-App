import React from "react";

function Alert({ message, classes }) {
  return <div className={"alert " + classes}>{message}</div>;
}

export default Alert;
