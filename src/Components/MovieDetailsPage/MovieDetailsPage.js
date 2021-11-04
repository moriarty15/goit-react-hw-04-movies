import { useParams, Switch, Route } from "react-router";
import { lazy, Suspense } from "react";
import {
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import * as FetchResponse from "../../services/FetchResponse";
import BasicInfomByMovie from "../../views/BasicInfomByMovie/BasicInfomByMovie";
import style from "./MovieDetailsPage.module.css";
import Modal from "../../views/Modal/Modal";


const Cast = lazy(() => import("../Cast" /* webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import("../Reviews" /*webpackChunkName: "reviews"*/)
);

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [trailer, setTrailer] = useState('');
  const [showModal, setShowModal] = useState(false)
  const location = useLocation();
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

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  const getTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US`
      );

      const json = await response.json();
      const results = await json.results[0];
      setTrailer(results.key)
      openModal()
    } catch (error) {
      alert("всё пропало");
    }
  };

  const openModal = () => {
    setShowModal(!showModal)
  }


  return (
    <>
      {movie && (
        <div className={style.container}>
          <button type="button" onClick={onGoBack} className={style.button}>
            Go back
          </button>
          <BasicInfomByMovie movie={movie} />
          <div className={style.additional__infom}>
            <p className={style.overview}>Additional information</p>
            <ul className={style.list}>
              <li className={style.item}>
                <NavLink
                  to={{
                    pathname: `${url}/cast`,
                    state: { from: location?.state?.from ?? "/" },
                  }}
                  onClick={getCast}
                  className={style.link}
                >
                  Cast
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink
                  to={{
                    pathname: `${url}/reviews`,
                    state: { from: location?.state?.from ?? "/" },
                  }}
                  onClick={() => {
                    getReviews();
                  }}
                  className={style.link}
                >
                  Reviews
                </NavLink>
              </li>
              <li  className={style.item}>
                <NavLink
                  to={{
                    pathname: `${url}/trailer`,
                    state: {from: location?.state?.from ?? "/"}
                  }}
                  className={style.link}
                  onClick={() => {
                    getTrailer();
                  }}
                >
                  Trailer
                  </NavLink>
              </li>
            </ul>
          </div>
          {showModal && <Modal openModal={openModal } trailer={trailer}/>}

          <Suspense fallback={<p>loading</p>}>
            <Switch>
              <Route path={`${url}/cast`}>
                {cast.length !== 0 ? (
                  <Cast cast={cast} />
                ) : (
                  <p>Sorry, nothing was found</p>
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
          </Suspense>
        </div>
      )}
    </>
  );
}