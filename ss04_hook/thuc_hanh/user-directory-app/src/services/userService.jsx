
function searchUsers(users, searchName, searchCity) {
    return users.filter(user => user.name.toLowerCase().includes(searchName.toLowerCase()) && user.address.city.toLowerCase().includes(searchCity.toLowerCase()));
}

export default searchUsers;