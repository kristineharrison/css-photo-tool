import { useState } from "react";

export default function StyleExample({ newStyle, imagePlaceholder, descriptionPlaceholder, titlePlaceholder, codePlaceholder }) {
  const { imageUrl, title, description, code, classStyle } = newStyle;

  const [classToggle, setClassToggle] = useState({classStyle});
  const [classPlaceholderToggle, setClassPlaceholderToggle] = useState("");
  const plainText = "img { border-radius: 10px; }"

  function handleClick() {
    setClassToggle(!classToggle)
  }

  function handlePlaceholderClick() {
    setClassPlaceholderToggle(!classPlaceholderToggle)
  }

  return (
    <div className="example">
      {titlePlaceholder ?
        <h1>Rounded Corners</h1>
        :
        <h1>{title}</h1>
      }
      {imagePlaceholder ? classPlaceholderToggle ?
        <img 
            onClick={handlePlaceholderClick}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-men-standing-on-a-high-catwalk-surveying-the-news-photo-1582921823.jpg"
            alt="Image Example"
        />
        :
        <img 
            onClick={handlePlaceholderClick}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-men-standing-on-a-high-catwalk-surveying-the-news-photo-1582921823.jpg"
            className="rounded"
            alt="Image Example"
        />
        :
        (classToggle ? 
          <img onClick={handleClick} className={classStyle} src={imageUrl} alt="Image Example" />
          :
          <img onClick={handleClick} src={imageUrl} alt="Image Example" />)
        }
     
      <p>Click to view the original image</p>
      {descriptionPlaceholder ?
        <p>Use the border-radius property to create rounded images.</p>
        :
        <p>{description}</p>
      }
      <div className="code-container">
      {codePlaceholder ?
        <p className="code">{plainText}</p>
            :
        <p className="code">{code}</p>
      }
      </div>
    </div>    
  );
}
