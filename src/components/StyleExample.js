import { useState } from "react";

export default function StyleExample({ newStyle }) {
  const { imageUrl, title, description, code, classStyle } = newStyle;

  const [originalImage, setOriginalImage] = useState('false')

  return (
    <div className="example">
      <h1>{title}</h1>
      {originalImage ? 
        <img onClick={()=>{setOriginalImage(!originalImage)}} className={classStyle} src={imageUrl} alt="Image Example" />
        :
        <img onClick={()=>{setOriginalImage(!originalImage)}} src={imageUrl} alt="Image Example" />
      }
      <p>Click to view the original image</p>
      <p>{description}</p>
      <div className="code-container">
        <p className="code">{code}</p>
      </div>
    </div>
  );
}
