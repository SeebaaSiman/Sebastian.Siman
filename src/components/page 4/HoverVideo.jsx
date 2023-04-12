import { useState, useRef } from "react";

export const HoverVideo = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  function handleMouseEnter() {
    setIsPlaying(true);
    videoRef.current.play();
  }

  function handleMouseLeave() {
    setIsPlaying(false);
    videoRef.current.pause();
  }

  return (
    <video
      ref={videoRef}
      src={src}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      autoPlay={isPlaying}
      loop
      muted
    />
  );
};
