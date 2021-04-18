import React, { useState, useEffect } from "react";
import Rest from "../../Url";

const ViewImage = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    Rest.get().then((data) => setImage(data));
  }, []);
  console.log(image);
  return (
    <div>
      {image.map((ele) => {
        return (
          <div>
            <p> {ele.title}</p>
            <img src={ele.url} />
          </div>
        );
      })}
    </div>
  );
};

export default ViewImage;
