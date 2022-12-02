import Link from "next/link"

const fetchSinglePost = (id) => {

    // Incremental static regeneration each 60secs
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    .then(res=> res.json())
}

//data fetching in component at server
export default async function Post ({children, params}) {
    const {id} = params
    const post = await fetchSinglePost(id)

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Show Comments</Link>
            {children}
        </article>
    )
}