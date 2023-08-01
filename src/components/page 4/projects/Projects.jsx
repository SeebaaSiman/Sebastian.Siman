import { useContext, useState } from "react";
import styled from "styled-components";

import { CursorContext } from "../../cursor/CustomManager";
import useDeviceType from "../../../hook/useDeviceType";
import { device } from "../../../style/StyleGlobal";
import { IconLinkExternal, iconSizeLink } from "../../../style/icons";
export const Projects = ({
  url,
  title,
  index,
  setRotation,
  setIndex,
  activeIndex,
}) => {
  const { handleCursorMedium, handleCursorSmall } = useContext(CursorContext);
  const mouseEnter = () => {
    setRotation(index);
    handleCursorMedium();
  };
  const mouseLeave = () => {
    setIndex(-1);
    handleCursorSmall();
  };
  const deviceType = useDeviceType();
  const [isCloneActive, setIsCloneActive] = useState(false);
  const handleCloneClick = () => {
    setIsCloneActive(true);
    setRotation(index);
  };

  return (
    <>
      {deviceType === "desktop" ? (
        <Clone onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <a href={url} target="_blank">
            <h1 className="menu-title">▪ {title}</h1>
            <h1 className="menu-title clone">▪ {title}</h1>
          </a>
        </Clone>
      ) : (
        <Clone onClick={handleCloneClick} isCloneActive={isCloneActive}>
          <h1 className="menu-title">▪ {title}</h1>
          <h1 className="menu-title clone">▪ {title}</h1>
          {isCloneActive && activeIndex === index && (
            <Link href={url} target="_blank">
              <IconLinkExternal size={iconSizeLink} />
            </Link>
          )}
        </Clone>
      )}
    </>
  );
};
const Link = styled.a`
  display: flex;
  align-items: end;
  z-index: 200;
`;
const Clone = styled.div`
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  @media ${device.sm} {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  a {
    color: transparent;
  }
  h1 {
    font-size: 10vw;
    transition: transform color 0.1s ease-in-out;
  }
  &:hover h1 {
    ~ .clone {
      clip-path: inset(0 0 0 0);
    }
  }
  h1 {
    ~ .clone {
      clip-path: ${(props) =>
        props.isCloneActive ? "inset(0 0 0 0)" : "initial"};
    }
  }
  .menu-title {
    font-family: "Oxygen", sans-serif;
    font-size: 8.5vw;
    text-transform: lowercase;
    z-index: 100;
    line-height: 1.1;

    &.clone {
      position: absolute;
      top: 0;
      color: black;
      clip-path: inset(0 100% 0 0);
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &:not(.clone) {
      -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
      color: transparent;
    }
  }
`;
// onMouseEnter={() => setRotation(index)}
// onMouseLeave={() => setIndex(-1)}
