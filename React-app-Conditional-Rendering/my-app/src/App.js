import React, { Component } from "react";
import HomePage from "./Conditional_Components/HomePage";
import LogInPage from "./Conditional_Components/LogInPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    const expo = isLoggedIn ? <HomePage /> : <LogInPage />;
    return <div>{expo}</div>;
  }
}

export default App;
