
function PostCard({title, body, userId}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body.slice(0, 100)}</p>
            <p>{userId}</p>
        </div>
    )
}

export default PostCard;