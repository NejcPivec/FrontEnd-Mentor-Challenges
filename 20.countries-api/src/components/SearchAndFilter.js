import React from "react";

const SearchAndFilter = ({
  onSubmit,
  countrySearch,
  onChange,
  filterRegion,
}) => {
  return (
    <div className="flex-between searFilt">
      <div className="search">
        <form onSubmit={onSubmit}>
          <i className="fas fa-search search-icon "></i>
          <input
            value={countrySearch}
            className="search-input "
            placeholder="Search for a country..."
            onChange={onChange}
          />
        </form>
      </div>
      <div className="dropdown ">
        <button
          className="dropbtn "
          onClick={() =>
            document.getElementById("myDropdown").classList.toggle("show")
          }
        >
          Filter by Region <i className="fas fa-chevron-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <button className="drop-item" value="Africa" onClick={filterRegion}>
            Africa
          </button>
          <button className="drop-item" value="Americas" onClick={filterRegion}>
            America
          </button>
          <button className="drop-item" value="Asia" onClick={filterRegion}>
            Asia
          </button>
          <button className="drop-item" value="Europe" onClick={filterRegion}>
            Europe
          </button>
          <button className="drop-item" value="Oceania" onClick={filterRegion}>
            Oceania
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
