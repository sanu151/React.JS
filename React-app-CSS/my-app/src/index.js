import React from "react";
import ReactDOM from "react-dom/client";

const blogHeading = "CSS Styling in JSX";
const blogTitle = "Styling Components in JSX";
const blogAuthor = "Supriyo Das";
const blogPara =
  "There are a few ways to apply CSS styles to components in JSX. The most common approach is to use a separate CSS file and reference it using the className attribute in your JSX. This keeps your styles organized and maintainable. However, JSX also allows for inline styles and CSS-in-JS libraries which can be useful for specific situations.";

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const authorSpan = {
  padding: "20px",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="blogHeading">{blogHeading}</h1>
    <div className="card">
      <h3 className="cardTitle">{blogTitle}</h3>
      <p className="cardDesc">{blogPara}</p>
      <p className="footer">
        <span>{blogAuthor}</span>{" "}
        <span style={authorSpan}>
          {dateName + "/" + monthName + "/" + yearName}
        </span>
      </p>
    </div>
  </div>
);
