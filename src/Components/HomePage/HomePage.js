import { Link } from "react-router-dom";

export default function HomePage({ films }) {
  return (
    <>
      <ul>
        {films.map(({id, original_title, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title ?? name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
