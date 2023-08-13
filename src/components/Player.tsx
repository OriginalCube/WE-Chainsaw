import React, { useEffect, useState, useRef } from "react";
import SongData from "../Data.json";
import { motion } from "framer-motion";

const imageVariants = {};

const Player = () => {
  const { Songs } = SongData;
  const audioRef = useRef(new Audio());
  const { duration } = audioRef.current;
  const intervalRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [songId, setSongId] = useState(
    Math.floor(Math.random() * (Songs.length - 1)),
  );
  const [volume, setVolume] = useState(0.3);
  const [title, setTitle] = useState("");

  //Audio Input settings
  const handlePlay = () => {
    if (!playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleSkip = () => {
    if (songId + 1 < Songs.length) {
      setSongId(songId + 1);
    } else {
      setSongId(0);
    }
  };

  const handlePrev = () => {
    if (songId - 1 > 0) {
      setSongId(songId - 1);
    } else {
      setSongId(Songs.length - 1);
    }
  };

  const handleAddVolume = () => {
    if (volume < 0.9) {
      setVolume(volume + 0.1);
    }
  };

  const handleLessVolume = () => {
    if (volume >= 0.2) {
      setVolume(volume - 0.1);
    } else if (volume < 0.2) {
      setVolume(0);
    }
  };

  //Audio Range Settings//
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    setInterval(() => {
      if (audioRef.current.ended) {
        handleSkip();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value: string) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = parseInt(value);
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    setPlaying(false);
    startTimer();
  };
  //Audio Range Settings//

  //Volume Controller//
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  //Main Controller//
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current.src = `/assets/songs/${Songs[songId].title}.${Songs[songId].type}`;
    audioRef.current.volume = 0.3;
    setTitle(Songs[songId].title);
    audioRef.current.play();
    startTimer();
  }, [songId]);

  return (
    <div className="absolute w-full h-40 bottom-10 flex items-center justify-center text-white">
      <div className="h-full w-2/6 flex flex-col items-center justify-center gap-1">
        <input
          type="range"
          title="music"
          className="w-5/6"
          step="1"
          min="0"
          value={trackProgress}
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onClick={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-xl font-light">{title}</p>
          <div className="flex items-center justify-center gap-12">
            <motion.img
              initial={{ border: 0 }}
              whileTap={{ border: "3px solid white" }}
              src="./assets/icons/volumeMinus.png"
              className="h-9 w-auto p-2 rounded-md"
              style={{ backgroundColor: "rgba(255,255,255,.2)" }}
              onClick={handleLessVolume}
              alt=""
            />
            <motion.img
              initial={{ border: 0 }}
              whileTap={{ border: "3px solid white" }}
              src="./assets/icons/backward.png"
              className="h-9 w-auto p-2 rounded-md"
              style={{ backgroundColor: "rgba(255,255,255,.2)" }}
              onClick={handlePrev}
              alt=""
            />
            <motion.img
              initial={{ border: 0 }}
              whileTap={{
                border: "3px solid white",
                backgroundColor: "rgba(255,255,255,.2)",
              }}
              src={`./assets/icons/${playing ? "play" : "pause"}.png`}
              className="h-10 w-auto border-white p-2 rounded-md"
              onClick={handlePlay}
              alt=""
            />
            <motion.img
              initial={{ border: 0 }}
              whileTap={{ border: "3px solid white" }}
              src="./assets/icons/forward.png"
              className="h-9 w-auto p-2 rounded-md"
              style={{ backgroundColor: "rgba(255,255,255,.2)" }}
              onClick={handleSkip}
              alt=""
            />
            <motion.img
              initial={{ border: 0 }}
              whileTap={{ border: "3px solid white" }}
              src="./assets/icons/volumePlus.png"
              className="h-9 w-auto p-2 rounded-md"
              style={{ backgroundColor: "rgba(255,255,255,.2)" }}
              onClick={handleAddVolume}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
