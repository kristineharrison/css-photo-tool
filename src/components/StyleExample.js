export default function StyleExample({ newImage }) {
  const { imageUrl, title, description, code } = newImage;

  return (
    <div>
      <h1>{title}</h1>
      <img class="rounded" src={imageUrl} alt="roses" />
      <p>{description}</p>
      <div class="codeContainer">
        <p class="code">{code}</p>
      </div>
    </div>
  );
}
