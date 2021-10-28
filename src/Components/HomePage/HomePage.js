export default function HomePage({ films }) {
  return (
    <>
      <ul>
        {films.map(({id, original_title, name }) => {
          return (
            <li key={id}>
              <p>{original_title ?? name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
