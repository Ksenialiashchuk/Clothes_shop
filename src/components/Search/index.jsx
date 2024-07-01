import React from "react";
import "./search.scss";
import search from "./search-header.png";
import delete_search from "./delete_search.png";

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className="search-header">
      <div className="input">
        {/* <img src={search} className="search-img" /> */}
        <input
          type="plaxeholder"
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          placeholder="Search..."
        />
      </div>

      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className="delete_search"
          src={delete_search}
        />
      )}
    </div>
  );
}
