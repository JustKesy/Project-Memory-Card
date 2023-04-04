import React from "react";

export function Header() {
  return (
    <div className="header">
      <h1>
        Hit the <span>bug</span>!! But only <span>1</span>!
      </h1>
      <div className="game-board">
        <h2>Score: 0</h2>
        <h2>Hit another one!</h2>
        <button>Reset Game</button>
      </div>
    </div>
  );
}
