import { useState } from "react";

import Child from "./components/child";

function App() {
  const [h3Data, setH3Data] = useState("");
  const data = "Hello I am message form App.js";
  const handleChildData = (childData) => {
    console.log(childData);
    setH3Data(childData);
  };

  return (
    <div>
      <Child data={data} onChildData={handleChildData} />
      <h3>{h3Data}</h3>
    </div>
  );
}

export default App;
