import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function PostDetailPage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            }
        }

        getPost();
    }, [id]);

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (error) return (
        <h1>Error: {error}</h1>
    )

    return (
        <>
            <h1>Post Detail Page</h1>
            <button onClick={() => {
                setLoading(true);
                navigate('/posts')
            }}>Back</button>
            <h1>Title: {post.title}</h1>
            <p>Body: {post.body}</p>
            <span>User ID: {post.userId}</span>
        </>
    )
}

export default PostDetailPage;