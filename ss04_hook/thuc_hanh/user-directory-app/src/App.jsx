import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.jsx";
import UserList from "./components/UserList.jsx";
import searchUsers from "./services/userService.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchName, setSearchName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    function getCities(users) {
      const cities = users.map((user) => {
        return user.address.city;
      });

      const uniqueCities = [...new Set(cities)];
      setCities(uniqueCities);
    }

    async function getUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        getCities(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    getUsers();
  }, []);

        if (loading)
          return <p>Đang tải...</p>
        else if (error)
          return <p>{error}</p>
        else
          return (
              <div>
                <SearchBar cities={cities} searchName={searchName} setSearchName={setSearchName} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
                <UserList users={searchUsers(users, searchName, selectedCity)} />
              </div>
          )
}

export default App
