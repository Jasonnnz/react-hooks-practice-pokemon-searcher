import React from "react";

function Search({ search, setSearch}) {
  function handleSearch(e){
    setSearch(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => handleSearch(e)} value={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
