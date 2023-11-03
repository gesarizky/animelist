"use client";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };
  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right"
          onClick={handleVideoPlayer}
        >
          {<XCircle size={32} />}
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          opts={option}
          onError={()=>{alert("Video is broken")}}
        />
      </div>
    );
  };
  const ButtonOpenPlayer = () => {
    return (
      <button
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-secondary text-xl hover:bg-color-accent transition-all shadow-xl"
        onClick={handleVideoPlayer}
      >
        tonton trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};
export default VideoPlayer;
