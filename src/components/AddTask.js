import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import getStyle from "../utilities/styles";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const userInput = event.target.elements[0];
    if (userInput.value !== "") {
      const data = { description: userInput.value };
      if (this.props.mode === "Add") {
        this.props.addTask(data);
      } else if (this.props.mode === "Edit") {
        this.props.updateTask(data);
      }
    }
    userInput.value = "";
  }

  render() {
    const labelName = this.props.mode === "Add" ? "New Task" : "Current Task";
    const addBtnText = this.props.mode === "Add" ? "Add Task" : "Update Task";
    const cancelBtnText = "Cancel";

    const title = this.props.mode === "Add" ? "Add Task" : "Edit Task";
    return (
      <div className="card">
        <h3 className="card-title-lg">{title}</h3>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            labelName={labelName}
            onKeyUp={this.props.onKeyUp}
            getDefaultValue={this.props.currentTask}
            mode={this.props.mode}
          />
          <Button
            value={addBtnText}
            styling={getStyle("addBtn")}
            btnType={"submit"}
          />
          {this.props.mode === "Edit" ? (
            <Button
              value={cancelBtnText}
              styling={getStyle("cancelBtn")}
              btnType={"button"}
              onClick={this.props.cancelUpdate}
            />
          ) : (
            <div></div>
          )}
        </form>
      </div>
    );
  }
}

export default AddTask;
