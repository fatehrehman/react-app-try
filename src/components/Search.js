function Search(props) {
  return (
    <div>
      <label>Search </label>
      <input
        type="text"
        value={props.searchText}
        onChange={props.handleSearch}
      />
    </div>
  );
}
export default Search;
