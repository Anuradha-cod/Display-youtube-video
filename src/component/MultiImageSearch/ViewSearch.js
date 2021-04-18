import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewSearch = () => {
  const [viewData, setViewData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=276N03UPdOoXQL-SoCfMmvdvpJO_LkZ2nnqAdYG0It8"
    )
      .then((res) => res.json())
      .then((data) => setViewData(data));
  }, []);
  console.log(viewData);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm);
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {viewData
        .filter((ele) => {
          if (searchTerm === "") {
            return ele;
          } else if (
            ele.alt_description
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return ele;
          }
        })
        .map((ele) => {
          return (
            <div>
              <h2> {ele.alt_description}</h2>
              <img className="userImg" src={ele.urls.small} />
            </div>
          );
        })}
    </div>
  );
};

export default ViewSearch;
