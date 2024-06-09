import React from "react";

import Todo from "./Todo";
import style from "./Todos.module.css";

export default function Todos(props) {
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
}
