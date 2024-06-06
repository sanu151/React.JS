import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <section>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
