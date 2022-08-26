import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { videos } from "../../assets/videos";
import { channels } from "../../assets/channels";

const parseData = () => {
  const videoData = [];

  const channelMap = {};
  channels.forEach((channel) => {
    channelMap[channel.id] = channel.snippet.thumbnails.high.url;
  });

  videos.forEach((video) => {
    videoData.push({
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      channelName: video.snippet.channelTitle,
      channelID: video.snippet.channelId,
      videoID: video.id,
      channelImage: channelMap[video.snippet.channelId],
      views: video.statistics.viewCount,
      date: video.snippet.publishedAt,
    });
  });

  const toReturnIndex = [];
  const toReturn = [];

  while (toReturn.length != 50) {
    var idx = Math.floor(Math.random() * videoData.length);
    if (!toReturnIndex.includes(idx)) {
      toReturn.push(videoData[idx]);
    }
  }

  console.log(toReturn);

  return toReturn;
};
const VideoGrid = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    setVideoData(parseData());
  }, []);

  return (
    <div className="w-full h-full flex flex-wrap mt-14">
      {videoData.map((data) => (
        <VideoCard key={data.videoID} data={data} />
      ))}
    </div>
  );
};

export default VideoGrid;
