export default function SearchBar(props) {
  const { setquery } = props;
  return (
    <>
      <input
        type="text"
        className="search-countries"
        onChange={(e) => setquery(e.target.value)}
      />
    </>
  );
}
