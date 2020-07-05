import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.checked };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange();
    this.setState({ checked: event.target.checked });
  }

  render() {
    return (
      <input
        checked={this.props.checked}
        type="checkbox"
        onChange={this.handleChange}
      ></input>
    );
  }
}

export default Checkbox;
