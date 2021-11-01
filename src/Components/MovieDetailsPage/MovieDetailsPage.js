import { useParams, Switch, Route } from "react-router";
import { NavLink, useRouteMatch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import * as FetchResponse from "../../services/FetchResponse";
import BasicInfomByMovie from "../../views/BasicInfomByMovie/BasicInfomByMovie";

import Cast from "../Cast";
import Reviews from "../Reviews";

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
        history.goBack();
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
          <BasicInfomByMovie movie={movie} onClick={history.goBack} />
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
