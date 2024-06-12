import React from "react";

import style from "./Display.module.css";
function Display() {
  return (
    <div className={style.fullDisplay}>
      <div className={style.innerDiv}>
        <input
          type="text"
          name="inputDispaly"
          value="Input Display"
          className={style.innerDisplay}
        />
      </div>
      <div className={style.innerDiv}>
        <input
          type="text"
          name="outputDispaly"
          value="Output Display"
          className={style.innerDisplay}
        />
      </div>
    </div>
  );
}

export default Display;
