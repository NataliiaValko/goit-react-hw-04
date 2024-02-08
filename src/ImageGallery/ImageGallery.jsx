import { ImageCard } from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.image_gallery}>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};
