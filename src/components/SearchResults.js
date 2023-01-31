function SearchResults({ entries }) {
  return (
    <ul>
      {entries.map((entry) => {
        return <li key={entry.id}>{entry.title}</li>;
      })}
    </ul>
  );
}
export default SearchResults;
