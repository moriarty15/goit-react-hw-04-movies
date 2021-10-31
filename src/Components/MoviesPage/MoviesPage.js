import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as FetchResponse from "../FetchResponse";

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);

  const location = useLocation();
  const history = useHistory();

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
      setFound(results);
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
      <form onSubmit={searchButton}>
        <button type="submit">Search</button>
        <input onChange={inputChange} />
      </form>

      {found.length > 0 && (
        <ul>
          {found.map(({ original_title, name, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{original_title ?? name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
