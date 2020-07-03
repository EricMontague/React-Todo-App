import React from "react";
import Filter from "./Filter";
import Button from "./Button";
import getStyle from "../utilities/styles";

function CardFooter(props) {
  const buttonText = "Clear All";
  return (
    <footer className="card-footer">
      <Button
        value={buttonText}
        styling={getStyle("btnDark")}
        onClick={props.onClick}
      />
      <Filter setFilter={props.setFilter} filter={props.filter} />
    </footer>
  );
}

export default CardFooter;
