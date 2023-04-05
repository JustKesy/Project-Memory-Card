import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Container } from "./components/img-container";
import { imageList } from "./components/images";
import "./components/style.css";

function App() {
  const [images, setImages] = useState(imageList);
  const [score, setScore] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setImages(images.sort(() => Math.random() - 0.5));
  });

  function curentHit(e) {
    if (gameOver === true || score.includes(e.target.id)) {
      return setGameOver(true);
    } else {
      setScore(score.concat(e.target.id));
    }
  }

  function resetBtn() {
    setScore([]);
    setGameOver(false);
  }

  return (
    <div className="App">
      <Header score={score} gameover={gameOver} reset={resetBtn} />
      <Container imageList={images} hit={curentHit} />
    </div>
  );
}

export default App;
