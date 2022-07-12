import { useState, useEffect } from "react";
import StyleExample from "./StyleExample";
import StyleList from "./StyleList";

function Container() {
  const [getImage, setGetImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/examples/6")
      .then((res) => res.json())
      .then((data) => setGetImage(data));
  }, []);

  return (
    <div className="container">
      <aside>
        <StyleList />
      </aside>
      <section>
        <StyleExample newImage={getImage} />
      </section>
    </div>
  );
}

export default Container;
