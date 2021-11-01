import style from "./CastView.module.css";
import PropTypes from "prop-types";

const BASE_URL_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face";
const defaultImgURL =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

export default function CastView({ profile_path, name, character }) {
  return (
    <>
      <img
        className={style.images}
        src={profile_path ? `${BASE_URL_IMG}${profile_path}` : defaultImgURL}
        alt="img"
      />
      <span>Name: {name}</span>
      <p>Character: {character}</p>
    </>
  );
}

CastView.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
