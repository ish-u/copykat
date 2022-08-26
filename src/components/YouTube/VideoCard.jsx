import React from "react";

const getUploadTime = (date) => {
  const now = new Date();
  const uploaed = new Date(date);
  const time = (now - uploaed) / 1000;

  const minutes = time / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = weeks / 4;
  const years = months / 12;

  if (minutes < 60) {
    return minutes.toFixed(0) + " min ago";
  } else if (hours < 24) {
    return hours.toFixed(0) + " hours ago";
  } else if (days < 7) {
    return days.toFixed(0) + " day ago";
  } else if (weeks < 4) {
    return weeks.toFixed(0) + " weeks ago";
  } else if (months < 12) {
    return months.toFixed(0) + " months ago";
  }
  return years.toFixed(0) + " years ago";
};

const getViews = (views) => {
  if (views < 100) {
    return views + " views";
  } else if (views < 1000000) {
    return (views / 1000).toFixed(1) + "K views";
  } else if (views < 100000000) {
    return (views / 1000000).toFixed(1) + "M views";
  } else {
    return (views / 100000000).toFixed(1) + "B views";
  }
};

const VideoCard = ({ data }) => {
  const {
    title,
    thumbnail,
    channelName,
    channelImage,
    channelID,
    videoID,
    views,
    date,
  } = data;

  return (
    <div className="w-3/12 p-4 hover:cursor-pointer">
      <div
        onClick={() => {
          console.log("CLICK");
          window.location = "https://www.youtube.com/watch?v=" + videoID;
        }}
      >
        <img
          className="h-36 w-72"
          style={{ objectFit: "cover" }}
          src={thumbnail}
        ></img>
      </div>
      <div className="flex mt-4">
        <div
          className="h-9 w-9 mr-4"
          onClick={() => {
            console.log("CLICK");
            window.location = "https://www.youtube.com/channel/" + channelID;
          }}
        >
          <img src={channelImage} className="rounded-full"></img>
        </div>
        <div className="flex flex-col grow w-4/5">
          <span
            className="text-[14px] line-clamp-2"
            onClick={() => {
              console.log("CLICK");
              window.location = "https://www.youtube.com/watch?v=" + videoID;
            }}
          >
            {title}
          </span>
          <div
            className="flex align-middle items-center "
            onClick={() => {
              console.log("CLICK");
              window.location = "https://www.youtube.com/channel/" + channelID;
            }}
          >
            <span className="text-[12px] text-[#AAAAAA] hover:text-white">
              {channelName}{" "}
            </span>
            <span className="ml-2 material-icons text-[12px] text-[#AAAAAA] ">
              check_circle
            </span>
          </div>
          <span className="text-[12px] text-[#AAAAAA]">
            {getViews(views)} . {getUploadTime(date)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
