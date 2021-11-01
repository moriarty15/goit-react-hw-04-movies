import style from "./BasicInfomByMovie.module.css";
import PropTypes from "prop-types";

const defaultImgURL =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function BasicInfomByMovie({ movie, onClick }) {
  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <>
      <button onClick={() => onClick()} className={style.button}>
        Go back
      </button>
      <div className={style.container}>
        <div>
          <h2 className={style.title}>
            {original_title} (<span>{release_date.slice(0, 4)}</span>)
          </h2>

          <img
            className={style.images}
            src={poster_path ? `${BASE_URL_IMG}${poster_path}` : defaultImgURL}
            alt={original_title}
          />
        </div>
        <div>
          <p>
            rate: <span>{vote_average}</span>
          </p>
          <p className={style.overview}>Overview </p>
          <p className={style.overview__content}>{overview}</p>
          <p className={style.overview}>Genres </p>
          <ul>
            {genres.map(({ name }) => {
              return (
                <li key={name}>
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

BasicInfomByMovie.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
  }),
};
