import React, { useState } from "react";

export default function Form1() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(`Form is Submitted`);
    console.log(user);
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
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formDiv">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formDiv">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
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
