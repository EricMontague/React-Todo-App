import React from "react";
import PropTypes from "prop-types";

function Alert({ message, bgColor }) {
  return <div className={"alert " + bgColor}>{message}</div>;
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
};

export default Alert;
