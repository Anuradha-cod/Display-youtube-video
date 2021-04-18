import React, { useEffect, useState } from "react";
import VideoFile from "./Video.json";
import ReactPlayer from "react-player";

const ViewVideoSearch = () => {
  console.log(VideoFile);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <ReactPlayer
        url="https://player.vimeo.com/external/403777550.hd.mp4?s=2317662f5d6d3710a232e43b623e0a35d0741d21&profile_id=170"
        controls={true}
      /> */}
      {VideoFile.filter((ele) => {
        // if (
        //   ele.tags.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        // ) {
        //   return ele;
        // }
        if (searchTerm === "") {
          return ele;
        } else if (
          ele.tags.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return ele;
        }
        console.log(ele);
      }).map((ele) => {
        return (
          <div>
            {/* {searchTerm === "" ? null : } */}
            <p>{ele.tags}</p>
            {/* <p>{ele.id}</p> */}
            <ReactPlayer url={ele.videos.medium} controls={true} />
          </div>
        );
      })}
    </div>
  );
};

export default ViewVideoSearch;
