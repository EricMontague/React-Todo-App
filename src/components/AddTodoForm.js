import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import getStyle from "../utilities/styles";

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title !== "") {
      const data = { title: this.state.title };
      if (this.props.mode === "Add") {
        this.props.addTodo(data);
        event.target.elements["title"].nextElementSibling.classList.remove(
          "label-raised"
        );
      } else if (this.props.mode === "Edit") {
        this.props.updateTodo(data);
      }
    }
    this.setState({ title: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onKeyUp(event.target);
  }

  handleClick(event) {
    this.setState({ title: "" });
    this.props.cancelUpdate();
  }

  render() {
    const labelName = this.props.mode === "Add" ? "New Todo" : "Current Todo";
    const inputName = "title";
    const addBtnText = this.props.mode === "Add" ? "Add Todo" : "Update Todo";
    const cancelBtnText = "Cancel";

    const title = this.props.mode === "Add" ? "Add Todo" : "Edit Todo";
    return (
      <div className="card">
        <h3 className="card-title-lg">{title}</h3>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            labelName={labelName}
            inputName={inputName}
            onChange={this.handleChange}
            value={
              this.state.title === ""
                ? this.props.currentTodo
                : this.state.title
            }
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
              onClick={this.handleClick}
            />
          ) : (
            <div></div>
          )}
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
