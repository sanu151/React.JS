import React from "react";

import { FaTrashCan } from "react-icons/fa6";

export default function Todo(props) {
  const { id, title, desc } = props.todo;
  return (
    <article>
      <div>
        <h3>
          {id} {title}
        </h3>
        <p>{desc}</p>
      </div>
      <div>
        <button>
          <FaTrashCan />
        </button>
      </div>
    </article>
  );
}
