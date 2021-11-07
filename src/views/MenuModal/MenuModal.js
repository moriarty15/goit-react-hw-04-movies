// import { useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./MenuModal.module.css";
import { NavLink } from "react-router-dom";

const modalMenuRoot = document.getElementById("menu-modal-root");

export default function MenuModal({ toggleMenuModal }) {
  return createPortal(
    <div className={style.overlay} onClick={() => {}}>
      <div className={style.modal}>
        <button className={style.close} onClick={toggleMenuModal}>
          <svg
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.667 12.88 27.787 11l-7.454 7.453L12.88 11 11 12.88l7.453 7.453L11 27.787l1.88 1.88 7.453-7.454 7.454 7.454 1.88-1.88-7.454-7.454 7.454-7.453Z"
              fill="#212121"
            />
          </svg>
        </button>
        <div className={style.menu}>
          <ul className={style.list}>
            <li className={style.item}>
              <NavLink
                exact
                to="/trailor"
                className={style.link}
                activeClassName={style.activeLink}
              >
                TRAILOR
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                to="/about"
                className={style.link}
                activeClassName={style.activeLink}
              >
                ABOUT
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                to="/browseMovie"
                className={style.link}
                activeClassName={style.activeLink}
              >
                BROWSE MOVIES
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                to="/blog"
                className={style.link}
                activeClassName={style.activeLink}
              >
                BLOG
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                to="/contact"
                className={style.link}
                activeClassName={style.activeLink}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    modalMenuRoot
  );
}
