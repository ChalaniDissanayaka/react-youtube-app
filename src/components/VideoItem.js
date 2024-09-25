import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect, className }) => {
  return (
    <div className={className} onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="video-title">{video.snippet.title}</div>
      <div className="video-description">{video.snippet.description}</div>
    </div>
  );
};

export default VideoItem;