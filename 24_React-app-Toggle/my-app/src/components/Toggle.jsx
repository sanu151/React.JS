import React, { useState } from "react";

import style from "./Toggle.module.css";

function Toggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={style.paraDiv}>
      {toggle && ( // if toggle is true para will displayed else hidden
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          voluptatum nostrum sunt quod ducimus odio incidunt voluptatibus,
          quidem iste obcaecati eum veniam ex quaerat, unde assumenda, placeat
          quasi! Quis, harum?
        </p>
      )}
      <div className={style.btnDiv}>
        <button
          onClick={() => {
            setToggle(!toggle); // toggle value will be change true to false or false to true at every click
          }}
        >
          {toggle ? "Hide" : "Show"}
          {/* if toggle is true button will show as Hide and if toggle is false button will show as Show*/}
        </button>
      </div>
    </div>
  );
}

export default Toggle;
