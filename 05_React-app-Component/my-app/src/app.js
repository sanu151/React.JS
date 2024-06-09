import React from "react";
import Card from "./components/Card";
import Data from "./data/data.json";

const pageHeading = "React Component";

const App = () => {
  return (
    <div>
      <h1 className="pageHeading">{pageHeading}</h1>
      <div className="cardDiv">
        {Data.map((item, index) => (
          <Card key={index} cardTitle={item.title} cardBody={item.para} />
        ))}
      </div>
    </div>
  );
};

export default App;
