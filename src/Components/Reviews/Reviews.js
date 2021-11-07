import PropTypes from "prop-types"
import style from "./Reviews.module.css"

export default function Reviews({ reviews }) {
    return (<>
        <ul className={style.list}>
            {reviews.map(({author, content}) => {
                return <li key={author}>
                    <h3>{author}</h3>
                    <p>{content }</p>
                </li>
            })}
    </ul>
    </>)
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object),
}