import React, { useState } from "react";
import "./SearchBar.scss";

function SearchBar() {
  const [searchText, setsearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" Search for :", searchText);
    setsearchText("");
  }

  return (
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Recipe"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button type="submit"> Search </button>
      </form>
    </div>
  )
}

export default SearchBar;
