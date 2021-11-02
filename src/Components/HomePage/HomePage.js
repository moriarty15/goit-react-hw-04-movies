import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as FetchResponse from "../../services/FetchResponse";
import style from "./HomePage.module.css"

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function FetchPopularFilms() {
      try {
        const json = await FetchResponse.fetchPopularMovies();
        const results = await json.results;
        const arrayTitleFilms = results.map(({ id, name, original_title }) => {
          return { id, name, original_title };
        });
        setFilms(arrayTitleFilms);
      } catch (error) {
        alert("whoops");
      }
    }
    FetchPopularFilms();
  }, []);

  return (
    <>
      <ul className={style.list}>
        {films.map(({ id, original_title, name }) => {
          return (
            <li key={id} className={style.item}>
              <Link to={{
                pathname: `/movies/${id}`,
                state: {from: location}
              }} className={style.link}>{original_title ?? name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
