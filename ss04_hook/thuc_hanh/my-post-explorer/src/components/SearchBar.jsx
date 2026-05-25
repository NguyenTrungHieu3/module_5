
function SearchBar({searchTitle, setSearchTitle, selectedUserId, setSelectedUserId, userIds}) {
    return (
        <div>
            <label htmlFor="searchTitle">Tiêu đề </label>
            <input type="text" id="searchTitle" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
            <label htmlFor="selectedUserId">User ID </label>
            <select id="selectedUserId" value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
                <option value="0">-- Chọn User Id --</option>
                {userIds.map(userId => (
                    <option key={userId} value={userId}>{userId}</option>
                ))}
            </select>
        </div>
    )
}

export default SearchBar;
