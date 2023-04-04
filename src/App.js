import React, { useState } from "react";
import { Header } from "./components/header";
import { Container } from "./components/img-container";
import { imageList } from "./components/images";
import "./components/style.css";

function App() {
  const [images, setImages] = useState(imageList);

  return (
    <div className="App">
      <Header />
      <Container imageList={images} />
    </div>
  );
}

export default App;
