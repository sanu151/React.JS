import React from "react";
import ReactDOM from "react-dom/client";

const blogHeading = "React JS";
const blogTitle = "My First Blog about React JS";
const blogAuthor = "Supriyo Das";
const blogDesc =
  "React JS, or simply React, is a free and open-source library for building user interfaces. It allows developers to create interactive UIs by using reusable components written in JavaScript. These components control how different parts of the UI are displayed and update efficiently when data changes. React's focus on components and its efficient rendering make it a popular choice for building complex and dynamic web applications.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>{blogHeading}</h1>
    <h3>{blogTitle}</h3>
    <p>{blogDesc}</p>
    <p>{dateName + "/" + monthName + "/" + yearName}</p>
    <p>Written by : {blogAuthor}</p>
  </div>
);
