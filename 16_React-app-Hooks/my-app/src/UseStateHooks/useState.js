import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0); // const [variable, "setCount: method how variable change value"] = useState(initial_value)
  const handleClick1 = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick1}>Increment</button>
      <button onClick={handleClick2} disabled={count === 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}

export default UseState;
