import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.jsx";
import PostList from "./components/PostList.jsx";
import filterPosts from "./services/userService.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [userIds, setUserIds] = useState([]);

  useEffect(() => {
    function getUserIds(data) {
      return [...new Set(data.map(post => post.userId))];
    }

    async function getPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
        setUserIds(getUserIds(data));
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
      }

    getPosts();
  }, [])

  if (loading) {
    return <h1>Đang tải...</h1>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
      <>
        <SearchBar searchTitle={searchTitle}
                   setSearchTitle={setSearchTitle}
                   selectedUserId={selectedUserId}
                   setSelectedUserId={setSelectedUserId}
                   userIds={userIds}
        />

        {console.log("searchTitle: ", searchTitle)}
        {console.log("selectedUserId: ", selectedUserId)}
        {console.log(filterPosts(posts, searchTitle, selectedUserId))}
        <PostList posts={filterPosts(posts, searchTitle, selectedUserId)} />
      </>
  )
}

export default App
