import React from "react";
import Card from "./components/Card";
import Data from "./data/data.json";

const pageHeading = "React Component";

let items = [];

items = Data.map((item) => (
  <Card cardTitle={item.title} cardBody={item.para} />
));

const App = () => {
  return (
    <div>
      <h1 className="pageHeading">{pageHeading}</h1>
      <div className="cardDiv">{items}</div>
    </div>
  );
};

export default App;
