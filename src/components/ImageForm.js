import React, { useState } from "react";

export default function ImageForm({ addNewImage }) {
  const [formData, setFormData] = useState({
    imageUrl: "",
    classStyle: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <form
        // className="add-toy-form"
        onSubmit={(e) => {
          e.preventDefault();
          let newImage = {
            imageUrl: formData.imageUrl,
            likes: formData.likes,
          };
          addNewImage(newImage);
          setFormData({
            imageUrl: "",
            classStyle: "",
          });
        }}
      >
        <h3>Try out an image!</h3>
        <input
          type="text"
          name="image"
          placeholder="Enter an image URL..."
          className="input-text"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Image"
          className="submit"
        />
      </form>
    </div>
  );
}
