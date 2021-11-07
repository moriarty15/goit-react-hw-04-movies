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
        <button className={style.close} onClick={() =>{openModal()}}>
          <svg
            width="19"
            height="19"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.667 1.88 16.787 0 9.333 7.453 1.88 0 0 1.88l7.453 7.453L0 16.787l1.88 1.88 7.453-7.454 7.454 7.454 1.88-1.88-7.454-7.454 7.454-7.453Z"
              fill="#ff6b01"
            />
          </svg>
        </button>
      </div>
    </div>,
    modalRoot
  );
}
