import React, { useState } from "react";

export function Header(props) {
  return (
    <div className="header">
      <h1>
        Hit the <span>bug</span>!! But only <span>1</span>!
      </h1>
      <div className="game-board">
        <h2>
          {props.score.length === 9
            ? "!! You Did It !!"
            : `Score: ${props.score.length}`}
        </h2>
        <h2>
          {props.score.length === 9
            ? "Another One?"
            : props.gameover === false
            ? "Hit Another One"
            : "!! Game Over !!"}
        </h2>
        <button onClick={props.reset}>Reset Game</button>
      </div>
    </div>
  );
}
