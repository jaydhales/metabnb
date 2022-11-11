const Search = () => {
  return (
    <div className="flex mr-8">
      <input
        type="text"
        className="search-input"
        placeholder="Search for location"
      />
      <a href="#" className="btn px-20 rounded-l-none">
        Search
      </a>
    </div>
  );
};

export default Search;
