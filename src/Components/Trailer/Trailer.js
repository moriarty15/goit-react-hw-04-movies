import PropTypes from "prop-types";
import style from "./Trailer.module.css"

export default function Trailer({trailer}) {
    return (
        <div className={style.container}>
    <iframe src={`https://www.youtube.com/embed/${trailer}`} width="1200" height="800" frameborder="0" title={trailer} className={style.frame}></iframe>
  </div>

    )
}

Trailer.propTypes = {
    trailer: PropTypes.string,
}