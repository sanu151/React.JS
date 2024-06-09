import React, { useState } from "react";

import style from "./NewTodo.module.css";

export default function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.form_field}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div className={style.form_field}>
        <label htmlFor="desc">Description: </label>
        <textarea
          type="text"
          name="desc"
          id="desc"
          value={todo.desc}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
}
