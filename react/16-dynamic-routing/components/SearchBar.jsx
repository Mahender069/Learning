export default function SearchBar(props) {
  const { setquery } = props;
  console.log('search bar rendering');
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
