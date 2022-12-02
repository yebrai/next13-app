import style from './Comments.module.css'

const fetchComments = async (id) => {
    await new Promise(resolve=> setTimeout(resolve, 3000))
    throw new Error('Error loading comments')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
};

//data fetching in component at server
export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id)

  return (
  <ul className={style.list}>
    {comments.map(comment => (
        <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
        </li>
    ))}
  </ul>
  )
}
