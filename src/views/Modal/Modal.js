import { useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

export default function Modal({ openModal, trailer }) {
  useEffect(() => {
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  });
  const close = (e) => {
    if (e.code === "Escape") openModal();
  };
  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) openModal();
  };
  return createPortal(
    <div className={style.overlay} onClick={handleClickBackdrop}>
      <div className={style.modal}>
        <iframe
          src={`https://www.youtube.com/embed/${trailer}`}
          width="1200"
          height="800"
          frameBorder="0"
          title={trailer}
          className={style.frame}
        ></iframe>
      </div>
    </div>,
    modalRoot
  );
}
