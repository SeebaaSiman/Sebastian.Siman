import { useRef } from "react";
import { IconContainer } from "./page3Styles";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import {
  IconCss,
  IconHtml,
  IconJavaScript,
  IconReact,
  iconSize,
} from "../../style/icons";

export const IconsLanguages = () => {
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const options = {
    threshold: 0.8,
  };
  const isIntersecting2 = useIntersectionObserver(ref2, options);
  const isIntersecting3 = useIntersectionObserver(ref3, options);
  const isIntersecting4 = useIntersectionObserver(ref4, options);
  const isIntersecting5 = useIntersectionObserver(ref5, options);
  return (
    <IconContainer>
      <span ref={ref2} className={`${isIntersecting2 && "visible"}`}>
        <IconHtml size={iconSize} />
      </span>
      <span ref={ref3} className={`${isIntersecting3 && "visible"}`}>
        <IconCss size={iconSize} />
      </span>
      <span ref={ref4} className={`${isIntersecting4 && "visible"}`}>
        <IconJavaScript size={iconSize} />
      </span>
      <span ref={ref5} className={`${isIntersecting5 && "visible"}`}>
        <IconReact size={iconSize} />
      </span>
    </IconContainer>
  );
};
