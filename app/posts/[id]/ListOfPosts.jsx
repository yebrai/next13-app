import { LikeButton } from "./LikeButton.jsx"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
}

//data fetching in component at server
export default async function ListOfPosts () {
    const posts = await fetchPosts()

    return (
        <>
            {posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    <h2 style={{color: '#09f'}}>{post.title}</h2>
                    <p>{post.body}</p>
                    <LikeButton id={post.id} />
                </article>
            ))}
        </>
    )
}