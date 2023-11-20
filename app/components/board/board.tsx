import "./board.css";
import cards from "./cards";

import React from "react";

const Board = () => {
  let riverArr = [];

  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 40);
    console.log(num);
    riverArr.push(
      <p key={i} className={"card " + cards[num]}>
        {cards[num]}
      </p>
    );
  }

  return <div className="board-container">{riverArr}</div>;
};

export default Board;
