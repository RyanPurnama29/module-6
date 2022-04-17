import React from "react";

const SearchResult = (props) => {
  const { results } = props;
  return (
    <div style={{ marginTop: "20px" }}>
      {results.map((value, index) => {
        return (
          <img src={value} key={index} alt="result" data-testid="imageGif" />
        );
      })}
    </div>
  );
};

export default SearchResult;
