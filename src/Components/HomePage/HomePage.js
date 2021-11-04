import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as FetchResponse from "../../services/FetchResponse";
import style from "./HomePage.module.css"

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function FetchPopularFilms() {
      try {
        const json = await FetchResponse.fetchPopularMovies();
        const results = await json.results;
        const arrayTitleFilms = results.map(({ id, name, original_title, poster_path }) => {
          return { id, name, original_title, poster_path };
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
        {films.map(({ id, original_title, name,poster_path }) => {
          return (
            <li key={id} className={style.item}>
              <Link to={{
                pathname: `/movies/${id}`,
                state: {from: location}
              }} className={style.link}>
                
                <img className={style.image} src={`${BASE_URL_IMG}${poster_path}`} alt={original_title ?? name }/>
                <p className={style.name}>{original_title ?? name}</p>
              </Link>
              
              
            </li>
          );
        })}
      </ul>
    </>
  );
}
