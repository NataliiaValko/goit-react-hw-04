import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.btn_loadMore} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
