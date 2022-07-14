import Form from "./Form";
import GalleryGrid from "./GalleryGrid";

export default function Gallery({ imageArray, onDelete, addNewImage }) {
  return (
    <div>
      <Form addNewImage={addNewImage} />
      <GalleryGrid imageArray={imageArray} onDelete={onDelete} />
    </div>
  );
}
