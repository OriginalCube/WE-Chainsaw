import React from "react";

const Player = () => {
  return (
    <div className="absolute w-full h-40 bottom-10 flex items-center justify-center">
      <div className="h-full w-2/6 flex items-center justify-center gap-4">
        <input type="range" title="music" className="w-5/6 " />
        <div className=""></div>
      </div>
    </div>
  );
};

export default Player;
