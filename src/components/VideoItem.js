import React from "react";
import "./VideoItem.css";

const VideoItem = ({ videoItem, onVideoSelect }) => {
  //const variable for accessing items inside the json string
  const { title, thumbnails, description } = videoItem.snippet;
  return (
    //event is handled via callback from parent(App.js)
    <div
      onClick={() => onVideoSelect({ videoItem })}
      className="video-item item"
    >
      <img className="ui image" alt={description} src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
