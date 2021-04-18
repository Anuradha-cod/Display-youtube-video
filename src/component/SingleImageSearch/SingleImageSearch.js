import React, { useState } from "react";
import SingleImageSearchResult from "./SingleImageSearchResult";

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (e) => {
    // const data = e.target.value;
    setImg(e.target.value);
    console.log(img);
  };
  return (
    <div className="search1">
      <div className="search">
        <p className="search-user">Search anything like computer etc.</p>
        <input
          style={{
            backgroundColor: "black",
            color: "white",
            marginLeft: 70,
            marginTop: 100,
            paddingTop: 20,
            paddingLeft: 70,
            fontSize: 30,
            borderTopStyle: "hidden",
            borderRightStyle: "hidden",
            borderLeftStyle: "hidden",
            borderbottomStyle: "groove",
            outline: "none",
          }}
          type="text"
          placeholder="search here..."
          name="searchText"
          value={img}
          onChange={inputEvent}
        />
        <button>Search</button>
        {img === "" ? null : <SingleImageSearchResult name={img} />}
      </div>
    </div>
  );
};

export default Search;
