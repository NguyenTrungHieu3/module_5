import { useEffect, useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // function tang() {
  //   setCount(prev => prev + 5);
  // }

  // function giam() {
  //   if (count > 0) {
  //     setCount(prev => prev - 5)
  //   };
  // }

  // function reset() {
  //   setCount(0);
  // }

  // return (
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={tang}>Tăng</button>
  //     <button onClick={giam}>Giảm</button>
  //     <button onClick={reset}>Reset</button>
  //   </div>
  // )

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      console.log("-------- USE EFFECT CALLED ---------")
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Đang tải ....</p>
  }

  if (error) {
    return <p>Có lỗi {error}</p>
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )

}

export default App
