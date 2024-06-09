// If we not use event.stopPropagation(), it will porpagate child and parent both event when click on child event.

import React from "react";

function EventBubbling() {
  const handleParentClick = (event) => {
    console.log("Parent Event : ", event);
  };
  const handleChildClick = (event) => {
    event.stopPropagation(); // Handle to stop propagation, i.e., when click on child event it not executing the parant event
    console.log("Child Event : ", event);
  };
  return (
    <div className="parentClass" onClick={handleParentClick}>
      <h1>Event Bubbling | stopPropagation</h1>
      <button onClick={handleChildClick}>Button</button>
    </div>
  );
}

export default EventBubbling;
