import UserCard from "./UserCard.jsx";

function UserList({users}) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <UserCard {...user} />
                </li>
            ))}
        </ul>
    )
}

export default UserList;