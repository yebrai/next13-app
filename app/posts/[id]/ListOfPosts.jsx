import { LikeButton } from "./LikeButton.jsx"

const fetchPosts = () => {
    //no-store for server-side // whitout this opt its static page
    //return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
    //Incremental static regeneration each 60secs
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
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