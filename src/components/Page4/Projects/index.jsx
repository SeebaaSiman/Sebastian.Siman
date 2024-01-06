import { useContext } from "react";
import { CursorContext } from "@/components/cursor/CustomManager";
import { BtnAnimatedDesktop, BtnAnimatedTouch } from "@/style/projects.style";
import useDeviceType from "@/hook/useDeviceType";

export const Projects = ({
  url,
  title,
  index,
  setRotation,
  setIndex,
  activeIndex,
  handleActiveLink,
  isLinkActive,
}) => {
  const { handleCursorSmall, handleCursorXs } = useContext(CursorContext);

  const mouseEnter = () => {
    setRotation(index);
    handleCursorXs();
  };
  const mouseLeave = () => {
    setIndex(-1);
    handleCursorSmall();
  };

  const deviceType = useDeviceType();
  const onLink = () => {
    setRotation(index);
    handleActiveLink(index);
  };

  return (
    <>
      {deviceType === "desktop" ? (
        <BtnAnimatedDesktop
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          href={url}
          target="_blank"
          index={index}
        >
          <span>▪</span>
          {title}
        </BtnAnimatedDesktop>
      ) : (
        <BtnAnimatedTouch
          onClick={onLink}
          isLinkActive={activeIndex === index}
          index={index}
          href={isLinkActive ? url : null}
          disabled={!activeIndex === index}
          target="_blank"
        >
          {title}
        </BtnAnimatedTouch>
      )}
    </>
  );
};
