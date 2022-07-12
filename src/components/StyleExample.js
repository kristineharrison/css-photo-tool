export default function StyleExample({ newImage }) {
  const { imageUrl, title, description, code } = newImage;

  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt="roses" />
      <p>{description}</p>
      <p>{code}</p>
    </div>
  );
}
