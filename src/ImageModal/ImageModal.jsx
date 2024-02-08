import Modal from "react-modal";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export const ImageModal = ({
  isOpen,
  onRequestClose,
  dataForModal: { src, alt },
}) => {
  return (
    <Modal
      className={css.modal}
      contentLabel="Image Modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.modalOverlay}
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};
