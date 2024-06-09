import React from "react";
import users from "./list";

export default function App() {
  return (
    <div>
      <h1>Nested List</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>Name: {user.fullName}</h3>
          <p>Age: {user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <h4>Phone Numbers: </h4>
              <p>Office: {phone.office}</p>
              <p>Home: {phone.home}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
