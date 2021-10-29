export default function Reviews({reviews}) {
    return (<>
        <ul>
            {reviews.map(({author, content}) => {
                return <li key={author}>
                    <h3>{author}</h3>
                    <p>{content }</p>
                </li>
            })}
    </ul>
    </>)
}