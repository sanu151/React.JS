import React from "react";
import Card from "./components/Card";
import Data from "./data/data.json";

const pageHeading = "React Component";

let items = [];
for (let x = 0; x < Data.length; x++) {
  items.push(<Card cardTitle={Data[x].title} cardBody={Data[x].para} />);
}

const App = () => {
  return (
    <div>
      <h1 className="pageHeading">{pageHeading}</h1>
      <div className="cardDiv">{items}</div>
    </div>
  );
};

export default App;
