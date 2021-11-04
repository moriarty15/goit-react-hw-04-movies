import PropTypes from "prop-types";
import CastView from "../../views/CastView/CastView";
import style from "./Cast.module.css"

export default function Cast({ cast }) {
  return (
    <>
      {cast.length !== 0 && (
        <ul className={style.list}>
          {cast.map(({ profile_path, id, name, character }) => {
            return (
              <li key={id} className={style.item}>
              <CastView
                profile_path={profile_path}
                id={id}
                name={name}
                character={character}
                />
                </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
};
