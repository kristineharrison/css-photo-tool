import { useState, useEffect } from "react";
import Form from "./Form";
import GalleryGrid from "./GalleryGrid";
import Random from "./Random";

export default function Gallery() {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cssgallery")
      .then((res) => res.json())
      .then((data) => setImageArray(data));
  }, []);

  function addNewImage(newImage) {
    setImageArray((imageArray) => [newImage, ...imageArray]);

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
      <Random />
      <Form addNewImage={addNewImage} />
      <GalleryGrid imageArray={imageArray} onDelete={onDelete} />
    </div>
  );
}
