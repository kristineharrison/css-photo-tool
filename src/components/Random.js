import { useState } from "react";

export default function Random() {
  const [randomImage, setRandomImage] = useState("./assets/tryitout.png");

  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setRandomImage(data.message));
  }

  return (
    <div className="random">
      <img src={randomImage} alt="Random Image" />
      <button onClick={handleClick}>Get Random Image</button>
    </div>
  );
}
