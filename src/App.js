import { useState, useEffect } from "react";
import Styles from "./components/Styles";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

export default function App() {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cssgallery")
      .then((res) => res.json())
      .then((data) => setImageArray(data));
  }, []);

  function addNewImage(newImage) {
    setImageArray((imageArray) => [...imageArray, newImage]);

    fetch("http://localhost:3000/cssgallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newImage),
    });
  }

  function onDelete(id) {
    const updatedArray = imageArray.filter((image) => image.id !== id);
    setImageArray(updatedArray);
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/styles">
          <Styles imageArray={imageArray} onDelete={onDelete} />
        </Route>
        <Route exact path="/gallery">
          <Gallery
            imageArray={imageArray}
            onDelete={onDelete}
            addNewImage={addNewImage}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
