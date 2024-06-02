import React from "react";

export default function Child(props) {
  const data = "I am message form Child.js";
  props.onChildData(data);
  return (
    <div>
      <h1>I am child component</h1>
      <h3>{props.data}</h3>
    </div>
  );
}
