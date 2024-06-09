import React from "react";

export default function Child1(props) {
  const Todo = () => {
    const data = `I am Todo component from Child1.js`;
    return <div>{props.onChild1Data(data)}</div>;
  };
  return (
    <div>
      <Todo />
    </div>
  );
}
