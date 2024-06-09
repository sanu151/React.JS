import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

function Home() {
  const dummyTodos = ["Todo 1", "Todo 2"];
  const [todos, setTodo] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    setTodo([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default Home;
