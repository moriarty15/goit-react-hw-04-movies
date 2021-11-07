import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as FetchResponse from "../../services/FetchResponse";
import style from "./HomePage.module.css";
import MenuModal from "../../views/MenuModal/MenuModal";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function FetchPopularFilms() {
      try {
        const json = await FetchResponse.fetchPopularMovies();
        const results = await json.results;
        const arrayTitleFilms = results.map(
          ({ id, name, original_title, poster_path }) => {
            return { id, name, original_title, poster_path };
          }
        );
        setFilms(arrayTitleFilms);
      } catch (error) {
        alert("whoops");
      }
    }
    FetchPopularFilms();
  }, []);

  const toggleMenuModal = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button className={style.open} onClick={toggleMenuModal}>
        <svg
          width="40"
          height="40"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule=""
            clipRule=""
            d="M8 14.667V12h24v2.667H8Zm0 6.666h24v-2.666H8v2.666ZM8 28h24v-2.667H8V28Z"
            fill="#fff"
          />
        </svg>
      </button>
      <h2 className={style.titlePost}>SPORLIGHT <span className={style.titleSpan}>THIS MONTH</span></h2>
      <ul className={style.list}>
        {films.map(({ id, original_title, name, poster_path }) => {
          return (
            <li key={id} className={style.item}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
                className={style.link}
              >
                <img
                  className={style.image}
                  src={`${BASE_URL_IMG}${poster_path}`}
                  alt={original_title ?? name}
                />
                <p className={style.name}>{original_title ?? name}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      {showMenu && <MenuModal toggleMenuModal={toggleMenuModal} />}
    </>
  );
}
