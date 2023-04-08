import { useState } from "react";
import styled from "styled-components";

export const HoverImage = ({ image, video }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MediaWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video src={video} autoPlay muted loop />
      ) : (
        <img src={image} />
      )}
    </MediaWrapper>
  );
};
const MediaWrapper = styled.div`
  transition: transform 0.2s ease-in;

  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  img {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;
