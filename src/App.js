import React, { useState } from "react";
import SearchResult from "./searchResult";
import doFetchAPI from "./doFetchAPI";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOnClick = async () => {
    const result = await doFetchAPI(searchQuery);
    setSearchResult(result);
  };

  return (
    <>
      <h3>Search the Giphy</h3>
      <input
        type="text"
        aria-label="searchBox"
        onChange={(e) => handleOnChange(e)}
        value={searchQuery}
      />
      <button onClick={handleOnClick}>Search</button>
      <SearchResult results={searchResult} />
    </>
  );
};

export default App;
