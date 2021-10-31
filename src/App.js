import { Switch, Route } from "react-router";
import { lazy, Suspense } from "react";
import Navigation from "./Components/Navigation";
import NotFoundView from "./Components/NotFoundView";

const HomePage = lazy(() => import("./Components/HomePage"));
const MoviesPage = lazy(() => import("./Components/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./Components/MovieDetailsPage"));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loader</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}