import { useState, useEffect } from "react";
import CSSfilters from "./CSSFilters";
import CSSRounded from "./CSSRounded";

function Container() {
  const [getImage, setGetImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/examples/1")
      .then((res) => res.json())
      .then((data) => setGetImage(data));
  }, []);

  return <CSSRounded newImage={getImage} />;
}

export default Container;
