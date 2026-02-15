function SearchFilters({ setSearch, setCategory }) {
  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}

export default SearchFilters;
