import React, { Component } from "react";

export class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  eventHandle = (e) => {
    this.setState({
      changedValue: e.target.value,
    });
  };

  handleOnClick = () => {
    console.log(this.state.changedValue);
  };

  render() {
    const { changedValue } = this.state;
    return (
      <div>
        <input type="text" value={changedValue} onChange={this.eventHandle} />
        <button onClick={this.handleOnClick}>Print Value</button>
        <p>{changedValue}</p>
      </div>
    );
  }
}

export default InputText;
