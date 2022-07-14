import ImageCard from "./ImageCard";

export default function GalleryGrid({ imageArray, onDelete }) {
  const cards = imageArray.map((eachImage) => {
    return (
      <ImageCard
        key={`image-${eachImage.id}`}
        eachImage={eachImage}
        onDelete={onDelete}
      />
    );
  });

  return <div id="grid">{cards}</div>;
}
