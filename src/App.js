import React, { useState, useEffect } from "react";
import "./App.css";
import Artist from "./Artist";

function App() {
  const [artists, setArtists] = useState({});
  const [tracks, setTracks] = useState({});
  const [inputText, setInputText] = useState("");
  const [inputValue, setInputValue] = useState("perfect");
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${inputValue}&locale=en-US&offset=0&limit=1`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "",
          },
        }
      );
      const data = await response.json();
      setArtists(data.artists.hits[0].artist);
      setTracks({
        songimg: data.tracks.hits[0].track.images.coverart,
        title: data.tracks.hits[0].track.title,
      });
    } catch {
      console.log("error");
    }
  };

  const submitHandler = () => setInputValue(inputText);

  const changeText = (e) => setInputText(e.target.value);

  useEffect(() => fetchApi(), [inputValue]);

  return (
    <div className="Main-container">
      <h1 id="title">Search for Artist / Songs</h1>
      <div className="search-container">
        <input
          id="searchBar"
          type="text"
          placeholder="Search..."
          value={inputText}
          onChange={changeText}
        />
        <input id="submit" type="submit" onClick={submitHandler} />
      </div>
      <Artist
        name={artists.name}
        img={artists.avatar}
        songimg={tracks.songimg}
        title={tracks.title}
      />
    </div>
  );
}

export default App;
