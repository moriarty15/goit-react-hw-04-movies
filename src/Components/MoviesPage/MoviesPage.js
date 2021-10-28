import { useState } from "react";

export default function MoviesPage({onSubmit, found}) {
  const [search, setSearch] = useState("");

  const inputChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim();
    if (value === "") return;
    setSearch(value);
    };
    
    const searchButton = e => {
        e.preventDefault();
        if (search.trim() === "") {
            return
        }
        onSubmit(search);
        setSearch("");
    }

  return (
    <>
      <form onSubmit={searchButton}>
        <button type="submit">Search</button>
        <input onChange={inputChange} />
      </form>

      {found.length > 0 && <ul>
        {found.map(({ original_title, name, id }) => {
          return (<li key={id}>
          <p>{original_title ?? name }</p>
          </li>)
        })}
      </ul>}
    </>
  );
}
