import { useState, useRef, useEffect } from "react";
import useDeviceType from "../../hook/useDeviceType";

export const HoverVideo = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const deviceType = useDeviceType();

  const videoRef = useRef(null);
  function handleMouseEnter() {
    setIsPlaying(true);
    videoRef.current.play();
  }

  function handleMouseLeave() {
    setIsPlaying(false);
    videoRef.current.pause();
  }
  useEffect(() => {
    if (deviceType === "desktop") {
      handleMouseEnter();
    }
  }, []);

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
