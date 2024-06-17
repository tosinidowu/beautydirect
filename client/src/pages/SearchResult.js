import React from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

function SearchResult() {
    return (
      <div className="search_result">
        <Header />
        <SearchResults />
      </div>
    );
  };

  export default SearchResult;