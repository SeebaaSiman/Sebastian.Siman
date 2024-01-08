import { useState, useRef } from "react";
import useDeviceType from "@/hook/useDeviceType";

export const HoverVideo = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const deviceType = useDeviceType();

  const videoRef = useRef(null);
  
  const handleMouseEnter = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };
  const handleMouseLeave = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  return (
    <video
      ref={videoRef}
      src={src}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      autoPlay={deviceType === "desktop" ? isPlaying : true}
      loop
      muted
    />
  );
};
