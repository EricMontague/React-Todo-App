import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const labelName = "New Todo";
    const buttonText = "Add Todo";
    const buttonStyling = "btn btn-primary";
    return (
      <div className="card">
        <h3 className="card-title-lg">Add Todos</h3>
        <form>
          <TextInput labelName={labelName} />
          <Button value={buttonText} styling={buttonStyling} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
