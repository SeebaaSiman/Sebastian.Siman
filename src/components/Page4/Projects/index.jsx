import { useContext, useState } from "react";

import { CursorContext } from "@/components/cursor/CustomManager";
import { IconLinkExternal, iconSizeLink } from "@/style/icons";
import { Clone, Link } from "@/style/projects.style";
import useDeviceType from "@/hook/useDeviceType";

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
