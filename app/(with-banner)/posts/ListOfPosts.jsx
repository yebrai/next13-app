import Link from "next/link.js"
import { LikeButton } from "./LikeButton.jsx"

const fetchPosts = () => {
    // getStaticProps
    //return fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json())
    // getServerSideProps
    //return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}).then(res=> res.json())
    // Incremental static regeneration each 60secs
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
                    <Link href={`/posts/${post.id}`}>
                    <h2 style={{color: '#09f'}}>{post.title}</h2>
                    <p>{post.body}</p>
                    <LikeButton id={post.id} post={post}/>
                    </Link>
                </article>
            ))}
        </>
    )
}