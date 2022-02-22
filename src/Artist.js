import React from "react";
import { FaTiktok } from "react-icons/fa";
function Artist({ name, img, songimg, title }) {
  return (
    <div className="Artist-main-container">
      
      <div className="Artist-container">
        <img src={img} alt="NewImage" />
        <h3 id="name">Name of the artist: {name}</h3>
      </div>
      <div className="Song-container">
        <h1 id="songtitle">Song: {title}</h1>
        <div className="song-wrapper">
         
          <img id="photo" src={songimg} alt="songImg" />
          <span>
            <FaTiktok />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Artist;
