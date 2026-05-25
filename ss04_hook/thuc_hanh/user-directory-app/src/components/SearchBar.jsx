
function SearchBar({cities, searchName, setSearchName, selectedCity, setSelectedCity}) {
    return (
        <form>
            <label htmlFor="searchName">Tên: </label>
            <input type="text" id="searchName" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            <label htmlFor="searchCity">Thành phố: </label>
            <select id="searchCity" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">-- Chọn Thành Phố --</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </select>
        </form>
    )
}

export default SearchBar;