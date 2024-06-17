import React, { useState } from "react";
import ProcessQna from "./ProcessQna";
import { reactQnA } from "./QNA";
import style from "./ToggleQna.module.css";

function ToggleQna() {
  const [qnas, setQnas] = useState(reactQnA);
  return (
    <main>
      <section>
        <h1 className={style.heading}>React Questions and Answers</h1>
        {qnas.map((qna) => (
          <ProcessQna key={qna.id} {...qna} />
        ))}
      </section>
    </main>
  );
}

export default ToggleQna;
