import { useParams, Switch, Route } from "react-router";
import { NavLink, useRouteMatch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./MovieDetailsPage.module.css";
import * as FetchResponse from "../FetchResponse";

import Cast from "../Cast";
import Reviews from "../Reviews";

const defaultImgURL =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchById() {
      try {
        const json = await FetchResponse.fetchMovieById(movieId);
        setMovie(json);
      } catch (error) {
        alert("Простите, но по данному фильму ничего не найдено");
        history.goBack()
      }
    }
    fetchById();
  }, [movieId, history]);

  const getCast = async () => {
    try {
      const json = await FetchResponse.fetchMovieCast(movieId);
      const allCast = await json.cast;
      setCast(allCast);
    } catch (error) {
      alert("error");
    }
  };

  const getReviews = async () => {
    try {
      const json = await FetchResponse.fetchMovieReviews(movieId);
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
          <button onClick={() => history.goBack()}>Go back</button>
          <img
            className={style.images}
            src={
              movie.poster_path
                ? `${BASE_URL_IMG}${movie.poster_path}`
                : defaultImgURL
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
              <NavLink to={`${url}/cast`} onClick={getCast}>
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
              {cast.length !== 0 ? (
                <Cast cast={cast} />
              ) : (
                <p>Sorry, sorry, nothing was found</p>
              )}
            </Route>
            <Route path={`${url}/reviews`}>
              {reviews.length !== 0 ? (
                <Reviews reviews={reviews} />
              ) : (
                <p>We don't have any reviews for this movie</p>
              )}
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}
