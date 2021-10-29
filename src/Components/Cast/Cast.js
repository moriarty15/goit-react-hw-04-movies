import style from "./Cast.module.css"

export default function Cast({ cast }) {
    return (<>{cast.length !== 0 && (
            <ul>
              {cast.map(({ profile_path, id, name, character }) => {
                return (
                  <div key={id} className={style.contain}>
                    <li>
                      <img
                        className={style.images}
                        src={profile_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}` : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                        alt="img"
                      />
                      <span>Name: {name}</span>
                      <p>Character: {character}</p>
                    </li>{" "}
                  </div>
                );
              })}
            </ul>
          )}</>)
}