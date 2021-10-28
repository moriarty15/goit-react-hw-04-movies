import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import HomePage from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";
import Navigation from "./Components/Navigation";
import NotFoundView from "./Components/NotFoundView";

export default function App() {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);
  const [found, setFound] = useState([]);

  useEffect(() => {
    async function FetchPopularFilms() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=f67f4d14d6b529f941fa4f285225b954"
        );
        const json = await response.json();
        const results = await json.results;
        setFilms(results);
      } catch (error) {
        console.log("whoops");
      }
    }
    FetchPopularFilms();
  }, []);

  useEffect(() => {
    async function FetchFilmsByRequest() {
      if (search === "") return;
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US&page=1&include_adult=false&query=${search}`
        );
        const json = await response.json();
        const results = await json.results;
        setFound(results);
      } catch (error) {
        console.log("whoops");
      }
    }
    FetchFilmsByRequest();
  }, [search]);

  const handleFormSubmit = (search) => {
    setSearch(search);
  };

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
        <HomePage films={films} />
      </Route>

      <Route path="/movies">
        <MoviesPage onSubmit={handleFormSubmit} found={found} />
      </Route>

      <Route>
        <NotFoundView/>
      </Route>
      </Switch>
      
    </>
  );
}
