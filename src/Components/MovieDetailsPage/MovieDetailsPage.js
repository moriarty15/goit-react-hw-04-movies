import { useParams, Switch, Route } from "react-router";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./MovieDetailsPage.module.css";
import Cast from "../Cast";
import Reviews from "../Reviews";

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchById() {
      try {
        const response = await fetch(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US`);
        const json = await response.json();
        if (json.status !== "Released") {
          alert("error 404");
          return;
        }
        setMovie(json);
      } catch (error) {
        console.log("whoops");
      }
    }
    fetchById();
  }, [movieId]);

  const getCast = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US`
      );
      const json = await response.json();
      const allCast = await json.cast;
      setCast(allCast);
    } catch (error) {
      console.log("error");
    }
  };

  const getReviews = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US&page=1`
      );
      const json = await response.json();
      const results = await json.results;
      setReviews(results);
    } catch (error) {
      alert("всё пропало");
    }
  };

  return (
    <>
      {movie && (
        <div>
          <h2 className={style.title}>
            {movie.original_title} (
            <span>{movie.release_date.slice(0, 4)}</span>)
          </h2>
          <img
            className={style.images}
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={movie.original_title}
          />

          <p>
            rate: <span>{movie.vote_average}</span>
          </p>
          <p className={style.overview}>Overview </p>
          <p>{movie.overview}</p>
          <p className={style.overview}>Genres </p>
          <ul>
            {movie.genres.map(({ name }) => {
              return (
                <li key={name}>
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink
                to={`${url}/cast`}
                onClick={() => {
                  getCast();
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/reviews`}
                onClick={() => {
                  getReviews();
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path={`${url}/cast`}>
              {cast.length !== 0 ? <Cast cast={cast} /> : <p>Sorry, sorry, nothing was found</p>}
            </Route>
            <Route path={`${url}/reviews`}>
              {reviews.length !== 0 ? <Reviews reviews={reviews}/> : <p>We don't have any reviews for this movie</p>}
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}
