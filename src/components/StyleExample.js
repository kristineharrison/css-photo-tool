export default function StyleExample({ newImage }) {
  const { imageUrl, title, description, code, classStyle } = newImage;

  return (
    <div>
      <h1>{title}</h1>
      <img className={classStyle} src={imageUrl} alt="roses" />
      <p>{description}</p>
      <div className="container">
        <p className="code">{code}</p>
      </div>
    </div>
  );
}
