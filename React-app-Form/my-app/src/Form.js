import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(`Form is submitted`);
    let userData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userData);
    e.preventDefault();
  };
  return (
    <div className="mainDiv">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="formDiv">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleName}
            required
          />
        </div>
        <div className="formDiv">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleEmail}
            required
          />
        </div>
        <div className="formDiv">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
            required
          />
        </div>
        <div className="formDiv">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
