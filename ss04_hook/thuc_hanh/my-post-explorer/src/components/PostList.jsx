import PostCard from "./PostCard.jsx";

function PostList({posts}) {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <PostCard {...post} />
                </li>
            ))}
        </ul>
    )
}

export default PostList;