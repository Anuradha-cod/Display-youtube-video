import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

import YouTubeSearch from "./YoutubeSearch.json";

const channelId = "UC_x5XG1OV2P6uZZ5FSM9Ttw";
const count = 10;
const APIkey = "AIzaSyBUGlFDFuSkM6K0A07jgHm8pSlq9zxqoTQ";

const YoutubeLink = () => {
  const [inputValue, setInputValue] = useState("");
  const [findValue, setFindValue] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${inputValue}&key=${APIkey}`
      )
      .then((data) => setFindValue(data.data.items))
      .then((error) => console.log(error));
    setInputValue("");
    alert("please wait");
  };
  return (
    <div className="youtube-div">
      <p className="youtube-para">
        Search here Any youtube video and after submited wait for few seconds
      </p>
      <form className="youtube-form" onSubmit={(e) => submitHandler(e)}>
        <input
          onChange={(e) => handleChange(e)}
          type="search"
          value={inputValue}
        />
        <input className="search-input" type="submit" value="submit" />
      </form>
      <div className="display">
        {findValue.map((ele, key) => {
          let link = "https://www.youtube.com/embed/" + ele.id.videoId;
          return (
            <div className="grid-item" key={key}>
              <iframe
                width="560"
                height="315"
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* <h5>{ele.snippet.title}</h5> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YoutubeLink;
