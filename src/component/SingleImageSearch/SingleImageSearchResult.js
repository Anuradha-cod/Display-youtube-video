import React from "react";

const SearchResult = (props) => {
  const images = `https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <div>
      <img src={images} alt="search" />
    </div>
  );
};

export default SearchResult;
