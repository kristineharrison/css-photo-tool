import { useState, useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Random from "./components/Random";
import ImageForm from "./components/ImageForm";
import Gallery from "./components/Gallery";

export default function App() {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/gallery")
      .then((res) => res.json())
      .then((data) => setImageArray(data));
  }, []);

  function addNewImage(newImage) {
    setImageArray((imageArray) => [...imageArray, newImage]);

    fetch("http://localhost:3000/gallery", {
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
    <>
      <Header />
      <Container imageArray={imageArray} onDelete={onDelete} />
      <Random />
      <ImageForm addNewImage={addNewImage} />
      <Gallery imageArray={imageArray} onDelete={onDelete} />
    </>
  );
}
