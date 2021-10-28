import { useParams } from "react-router";
import { useState, useEffect } from "react";
import style from "./MovieDetailsPage.module.css";


export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchById() {
      try {
        const response = await fetch(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US`);
        const json = await response.json();
          if (json.status !== 'Released') {
              alert('error 404')
              return
          }
        setMovie(json);
      } catch (error) {
        console.log("whoops");
      }
    }
    fetchById();
  }, [movieId]);
    

  return (
    <>
      {movie && (
        <div>
                  <h2 className={style.title}>{movie.original_title} (<span>{movie.release_date.slice(0, 4)}</span>)</h2>
                  <img className={style.images} src={movie.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}` : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} alt={movie.original_title }/>
                  
                  <p>rate: <span>{movie.vote_average}</span></p>
                  <p className={style.overview}>Overview </p>
                  <p>{movie.overview}</p>
                  <p className={style.overview}>Genres </p>
                  <ul>
                  {movie.genres.map(({ name }) => {
                      return <li key={name}>
                          <span>{name}</span>
                      </li>
                  })}
                  </ul>
        </div>
      )}
    </>
  );
}
