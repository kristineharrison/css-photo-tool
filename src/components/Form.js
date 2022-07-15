import { useState } from "react";

export default function Form({ addNewImage, randomImage }) {
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
      image: randomImage ? randomImage : formData.image,
      style: formData.style,
    };
    addNewImage(newImage);
    setFormData({
      image: "Or enter an image URL...",
      style: "",
    });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          {/* <input
            type="text"
            name="image"
            placeholder="Or enter an image URL..."
            defaultValue={formData.image}
            onChange={handleChange}
          /> */}

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
          <button type="submit">Create New Image</button>
        </div>
      </form>
    </div>
  );
}
