import React, {useState} from "react";

function Search({listings, setListings}) {

  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    let searchedListings = listings.filter(listing=>search===listing.description)
    if (searchedListings.length > 0){
      setListings(searchedListings)
    } 
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
