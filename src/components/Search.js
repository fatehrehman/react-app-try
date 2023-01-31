function Search(props) {
  return (
    <div>
      <label>Search </label>
      <input
        type="text"
        value={props.searchText}
        onChange={(e) => props.setSearchText(e.target.value)}
      />
    </div>
  );
}
export default Search;
