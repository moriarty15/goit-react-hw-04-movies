import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as FetchResponse from "../../services/FetchResponse";
import style from "./MoviesPage.module.css"

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);
  const history = useHistory()
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
        alert("по данному запросу ничего не найдено");
        return;
      }
      const arrayTitleFilms = results.map(({ id, name, original_title }) => {
        return {id, name, original_title}
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
      alert("по данному запросу ничего не найдено");
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
        <button type="submit" className={style.button}>Search</button>
        <input onChange={inputChange}  placeholder="Search film.." className={style.input} />
      </form>

      {found.length > 0 && (
        <ul className={style.list}>
          {found.map(({ original_title, name, id }) => {
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
      )}
    </>
  );
}
