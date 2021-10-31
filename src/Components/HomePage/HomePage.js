import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FetchResponse from '../FetchResponse'


export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function FetchPopularFilms() {
      try {
        const json = await FetchResponse.fetchPopularMovies()
        const results = await json.results;
        setFilms(results);
      } catch (error) {
        alert("whoops");
      }
    }
    FetchPopularFilms();
  }, []);

  return (
    <>
      <ul>
        {films.map(({ id, original_title, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title ?? name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
