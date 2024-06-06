import React from "react";
import Todos from "./Todos";

export default function Home() {
  const demoTodo = [
    {
      id: 1,
      title: "Title 1",
      desc: "Todo 1 description",
    },
    {
      id: 2,
      title: "Title 2",
      desc: "Todo 2 description",
    },
  ];

  return (
    <div>
      <Todos todos={demoTodo} />
    </div>
  );
}
