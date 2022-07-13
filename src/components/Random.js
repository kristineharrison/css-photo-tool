import { useState } from "react";
import EditForm from "./EditForm";

export default function Random() {
  const [randomImage, setRandomImage] = useState("./assets/tryitout.png");

  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setRandomImage(data.message));
  }

  return (
    <div className="random">
      <img src={randomImage} alt="Random Image" style={{ opacity: 0.25 }} />
      <button onClick={handleClick}>Get Random Image</button>
      <EditForm />
    </div>
  );
}
