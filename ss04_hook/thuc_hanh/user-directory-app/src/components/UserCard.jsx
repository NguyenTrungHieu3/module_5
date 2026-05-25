function UserCard({name, email, address: {city}}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{city}</p>
        </div>
    )
}

export default UserCard;