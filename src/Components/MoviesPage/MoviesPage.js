import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as FetchResponse from "../../services/FetchResponse";
import style from "./MoviesPage.module.css";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const inputChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim();
    if (value === "") return;
    setSearch(value);
  };

  const queryRequest = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!queryRequest) {
      return;
    }
    const historySearch = async () => {
      const json = await FetchResponse.fetchMoviesByRequest(queryRequest);
      const results = await json.results;
      if (results.length === 0) {
        toast("Wow so easy!")
        return;
      }
      const arrayTitleFilms = results.map(({ id, name, original_title, poster_path }) => {
        return {id, name, original_title, poster_path}
      })
      setFound(arrayTitleFilms);
    };
    historySearch();
  }, [queryRequest]);

  const searchButton = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    const json = await FetchResponse.fetchMoviesByRequest(search);

    const results = await json.results;
    if (results.length === 0) {
      toast("По данному запросу фильма не найдено, пожалуйста сделайте запрос более специфичным")
      return;
    }
    setFound(results);
    history.push({
      ...location,
      search: `query=${search}`,
    });
  };

  return (
    <>
      <form onSubmit={searchButton} className={style.form}>
        <input
          onChange={inputChange}
          placeholder="Search film.."
          className={style.input}
        />
        <button type="submit" className={style.button}>
          <svg
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10.5 10.5 8.325 8.325"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <ToastContainer />
      {found.length > 0 && (
        <ul className={style.list}>
          {found.map(({ original_title, name, id, poster_path }) => {
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
      )}
    </>
  );
}
