import css from "./ImageCard.module.css";

export const ImageCard = ({
  image: {
    urls: { small, regular },
    alt_description,
    user: { name, location, total_likes },
  },
  onImageClick,
}) => {
  const handleImageClick = () => {
    onImageClick({ src: regular, alt: alt_description });
  };

  return (
    <div className={css.gallery_item}>
      <img src={small} alt={alt_description} onClick={handleImageClick} />
      <ul className={css.img_description}>
        <li className={css.description_item}>
          Name:&nbsp;
          <span className={css.description_span}> {name}</span>
        </li>
        <li className={css.description_item}>
          Location:&nbsp;
          <span className={css.description_span}> {location}</span>
        </li>
        <li className={css.description_item}>
          Likes:&nbsp;
          <span className={css.description_span}> {total_likes}</span>
        </li>
      </ul>
    </div>
  );
};
