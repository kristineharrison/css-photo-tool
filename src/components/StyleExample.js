export default function StyleExample({ newImage }) {
  const { imageUrl, title, description, code, classStyle } = newImage;

  return (
    <div className="example">
      <h1>{title}</h1>
      <img className={classStyle} src={imageUrl} alt="Image Example" />
      <p>{description}</p>
      <div className="code-container">
        <p className="code">{code}</p>
      </div>
    </div>
  );
}
