
function SearchBar({searchName, setSearchName, selectedGender, setSelectedGender}) {
    return (
        <div>
            <label htmlFor="searchName" style={{margin: "0 10px"}}>Tên:</label>
            <input id="searchName" type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            <label htmlFor="selectedGender" style={{margin: "0 10px"}}>Giới tính:</label>
            <select id="selectedGender" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                <option value="">-- Chọn giới tính --</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
            </select>
        </div>
    )
}

export default SearchBar;