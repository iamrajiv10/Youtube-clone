import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  };

  useEffect(() => {
    getVideos();
  },[]);

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <AdVideoCard info={videos[0]} /> }
      {videos.map((video) => (
        <Link to={"/watch?v="+video.id}>
        <VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  )
}

export default VideoContainer
