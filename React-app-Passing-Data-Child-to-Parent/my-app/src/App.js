import { useState } from "react";

import Child from "./components/child";
import Child1 from "./components/child1";

function App() {
  const [h3Data, setH3Data] = useState("");
  const [h3data1, setH3Data1] = useState("");
  const data = "Hello I am message form App.js";
  const handleChildData = (childData) => {
    console.log(childData);
    setH3Data(childData);
  };

  const handleChild1Data = (childData) => {
    console.log(childData);
    setH3Data1(childData);
  };

  return (
    <div className="appDiv">
      <Child data={data} onChildData={handleChildData} />
      <h3>{h3Data}</h3>
      <Child1 onChild1Data={handleChild1Data} />
      <h3>{h3data1}</h3>
    </div>
  );
}

export default App;
