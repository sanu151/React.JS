import React from "react";

import style from "./Todo.module.css";

import { FaTrashCan } from "react-icons/fa6";

export default function Todo(props) {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <FaTrashCan className={style.fa2x} />
        </button>
      </div>
    </article>
  );
}
