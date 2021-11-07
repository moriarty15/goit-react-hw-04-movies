import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={style.header}>
      <div className={style.contain}>
        <NavLink exact to="/" className={style.deck}>
          <div className={style.title__contain}>
            <span className={style.title}>
              ON<span className={style.title__post}>MOVIE</span>
            </span>
          </div>
        </NavLink>
        <div>
          <ul  className={style.list}>
            <li  className={style.item}>
              <NavLink
                exact
                to="/"
                className={style.link}
                activeClassName={style.activeLink}
              >
                HOME
              </NavLink>
            </li>
            <li  className={style.item}>
              <NavLink
                to="/movies"
                className={style.link}
                activeClassName={style.activeLink}
              >
                MOVIES
              </NavLink>
            </li>
            <li className={style.hidden}>
              <NavLink
                exact
                to="/trailor"
                className={style.link}
                activeClassName={style.activeLink}
              >
                TRAILOR
              </NavLink>
            </li>
            <li className={style.hidden}>
              <NavLink
                to="/about"
                className={style.link}
                activeClassName={style.activeLink}
              >
                ABOUT
              </NavLink>
            </li>
            <li className={style.hidden}>
              <NavLink
                to="/browseMovie"
                className={style.link}
                activeClassName={style.activeLink}
              >
                BROWSE MOVIES
              </NavLink>
            </li>
            <li className={style.hidden}>
              <NavLink
                to="/blog"
                className={style.link}
                activeClassName={style.activeLink}
              >
                BLOG
              </NavLink>
            </li>
            <li className={style.hidden}>
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
    </nav>
  );
}
