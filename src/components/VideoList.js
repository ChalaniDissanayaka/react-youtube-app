import React from 'react';
import VideoItem from './VideoItem';
import '../styles/VideoList.css'; 

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
        className="video-card"
      />
    );
  });

  return <div className="video-list">{renderedList}</div>;
};

export default VideoList;