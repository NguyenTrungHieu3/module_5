function UserCard({ name, role, goal }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{goal}</p>
        </div>
    )
}

export default UserCard;