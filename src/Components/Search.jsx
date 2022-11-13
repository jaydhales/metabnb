const Search = () => {
  return (
    <div className="md:flex mr-8 w-full">
      <input
        type="text"
        className="search-input"
        placeholder="Search for location"
      />
      <a
        href="#"
        className="btn px-20 rounded-t-none md:rounded-tr-lg md:rounded-l-none"
      >
        Search
      </a>
    </div>
  );
};

export default Search;
