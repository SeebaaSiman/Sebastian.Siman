import { useRef, useState } from "react";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: BOTTOM_RIGHT_CLIP,
  bottom: BOTTOM_RIGHT_CLIP,
  top: BOTTOM_RIGHT_CLIP,
  right: TOP_LEFT_CLIP,
};

const EXIT_KEYFRAMES = {
  left: TOP_RIGHT_CLIP,
  bottom: TOP_RIGHT_CLIP,
  top: TOP_RIGHT_CLIP,
  right: BOTTOM_LEFT_CLIP,
};
export const useProjectItem = () => {
  const [clipPath, setClipPath] = useState(BOTTOM_RIGHT_CLIP);
  const boxRef = useRef(null);

  const getNearestSide = (e) => {
    const box = boxRef.current.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort(
      (a, b) => a.proximity - b.proximity
    );

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    setClipPath(ENTRANCE_KEYFRAMES[side]);
    setTimeout(() => setClipPath(NO_CLIP), 50); // Para suavizar el efecto
  };
  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    setClipPath(EXIT_KEYFRAMES[side]);
  };

  return { handleMouseLeave, handleMouseEnter, boxRef, clipPath };
};
