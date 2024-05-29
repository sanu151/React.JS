import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <h1>Count : {count}</h1>
        <button onClick={this.handleRequest} className="btn">
          +
        </button>
      </div>
    );
  }
}
