import React from "react";

function SearchBox(props) {
  return (
    <div className="form-group">
      <input type="text" onKeyUp={props.onKeyUp} />
      <label>{props.labelName}</label>
    </div>
  );
}

export default SearchBox;
