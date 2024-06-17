import React, { useState } from "react";

import style from "./ProcessQna.module.css";

function ProcessQna({ id, question, answer }) {
  const [isClick, setIsClicked] = useState(false);

  return (
    <article className={style.articleQnA}>
      <div className={style.articalDiv}>
        <h3 className={style.questions}>
          {id}. {question}
        </h3>
        <button
          className={style.button}
          onClick={() => {
            setIsClicked(!isClick);
          }}
        >
          {isClick ? "-" : "+"}
        </button>
      </div>
      <div className={style.answers}>{isClick && <p>{answer}</p>}</div>
    </article>
  );
}

export default ProcessQna;
