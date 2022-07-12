import { useState, useEffect } from "react";
import StyleExample from "./StyleExample";

function Container() {
  const [getImage, setGetImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/examples/2")
      .then((res) => res.json())
      .then((data) => setGetImage(data));
  }, []);

  return (
    <div>
      <StyleExample newImage={getImage} />
    </div>
  );
}

export default Container;
