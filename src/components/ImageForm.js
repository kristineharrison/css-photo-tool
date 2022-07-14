import { useState } from "react";

export default function ImageForm({ addNewImage }) {
  const [formData, setFormData] = useState({
    image: "",
    style: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newImage = {
      image: formData.image,
      style: formData.style,
    };
    addNewImage(newImage);
    setFormData({
      imageUrl: "",
    });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Try out an image!</h3>
        <input
          type="text"
          name="image"
          placeholder="Enter an image URL..."
          defaultValue={formData.image}
          onChange={handleChange}
        />
        <br />

        <select
          name="style"
          onChange={handleChange}
          id="stylemenu"
          value={formData.style}
        >
          <option value="">Pick a Style</option>
          <option value="rounded">Rounded Corners</option>
          <option value="circle">Circle Image</option>
          <option value="grayscale">Grayscale</option>
          <option value="opacity">Opacity</option>
          <option value="blur">Blur Effect</option>
          <option value="hue">Hue Rotation</option>
          <option value="dropshadow">Drop Shadow</option>
        </select>
        <br />
        <button type="submit">Create New Image</button>
      </form>
    </div>
  );
}