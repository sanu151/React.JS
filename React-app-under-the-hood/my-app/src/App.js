import React from "react";

function App() {
  // React Create element using JavaScript createElement method
  return React.createElement(
    "div",
    {},
    React.createElement("h3", {}, "React App Under The Hood"),
    React.createElement(
      "p",
      {},
      "React's `createElement` function, though not directly called by you, powers JSX syntax. When you write JSX like `<div><h1>Hello</h1></div>`, Babel (or similar tool) transforms it to `React.createElement('div', ..., React.createElement('h1', ..., 'Hello'))` under the hood. This function creates lightweight objects describing the UI structure, which React uses for its Virtual DOM and efficient updates. "
    )
  );
}

export default App;
