import React, { useState } from "react";

const Player = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="absolute w-full h-40 bottom-10 flex items-center justify-center text-white">
      <div className="h-full w-2/6 flex flex-col items-center justify-center gap-1">
        <input type="range" title="music" className="w-5/6 " />
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-xl">Title</p>
          <div className="flex items-center justify-center gap-12">
            <img
              src="/assets/icons/volumeMinus.png"
              className="h-7 w-auto"
              alt=""
            />
            <img
              src="/assets/icons/backward.png"
              className="h-7 w-auto"
              alt=""
            />
            <img
              src={`/assets/icons/${playing ? "play" : "pause"}.png`}
              className="h-8 w-auto"
              onClick={handlePlay}
              alt=""
            />
            <img
              src="/assets/icons/forward.png"
              className="h-7 w-auto"
              alt=""
            />
            <img
              src="/assets/icons/volumePlus.png"
              className="h-7 w-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
