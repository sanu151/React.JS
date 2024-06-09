import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import Todos from "./Todos";
import style from "./Home.module.css";
import NewTodo from "./NewTodo";

export default function Home() {
  const [todos, setTodo] = useState([]);

  const handleAddTodo = (todo) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidV4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodo((prevTodo) => {
      const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}
