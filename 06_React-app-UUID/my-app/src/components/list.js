import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "Title 1",
    desc: "This is Description 1",
  },
  {
    id: uuidv4(),
    title: "Title 2",
    desc: "This is Description 2",
  },
  {
    id: uuidv4(),
    title: "Title 3",
    desc: "This is Description 3",
  },
  {
    id: uuidv4(),
    title: "Title 4",
    desc: "This is Description 4",
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        const { id, title, desc } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>
              Key: <small>{id}</small>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
