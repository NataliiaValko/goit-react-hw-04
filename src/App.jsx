import { useEffect, useState } from "react";

import { SearchBar } from "./SearchBar/SearchBar.jsx";
import { ImageGallery } from "./ImageGallery/ImageGallery.jsx";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage.jsx";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn.jsx";
import { Loader } from "./Loader/Loader.jsx";
import { ImageModal } from "./ImageModal/ImageModal.jsx";
import { fetchImages } from "./service/unsplashAPI.js";

import "./App.css";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fn = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchImages({ query, page });
        if (!data?.results?.length) return;

        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error("Error retrieving images:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fn();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (dataForModal) => {
    setDataForModal(dataForModal);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setDataForModal("");
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && !error && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}

      {error && (
        <ErrorMessage message="Oops, there was an error, please try reloading" />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          dataForModal={dataForModal}
        />
      )}
      {loading && <Loader />}
    </>
  );
};
