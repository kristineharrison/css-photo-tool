export default function CSSRounded({ newImage }) {
  const { imageUrl, title } = newImage;

  return (
    <div>
      <h1>Rounded Corners</h1>
      <img src={imageUrl} alt="roses" />
      <p>Steps on how to do it</p>
    </div>
  );
}
