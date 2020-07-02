import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const labelName = "Search";
    const buttonText = "Clear All";
    const buttonStyling = "btn";
    return (
      <div className="card">
        <h3 className="card-title-lg">Todo List</h3>

        <TextInput labelName={labelName} />
        <Button value={buttonText} styling={buttonStyling} />
      </div>
    );
  }
}

export default TodoList;
