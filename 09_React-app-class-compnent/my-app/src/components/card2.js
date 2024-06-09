// Class Component

import React, { Component } from "react";

class Card2 extends Component {
  render() {
    return (
      <div className="cardDiv">
        <h3 className="cardTitle">{this.props.title}</h3>
        <p className="cardDesc">{this.props.desc}</p>
      </div>
    );
  }
}

export default Card2;
