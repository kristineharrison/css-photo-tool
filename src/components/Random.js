// import { useState } from "react";

export default function Random({ setRandomImage, randomImage }) {
  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setRandomImage(data.message));
  }

  return (
    <div className="random">
      <h2>Try it Out!</h2>
      <img src={randomImage} alt="Dog" />
      <button onClick={handleClick}>Get Random Image</button>
    </div>
  );
}
