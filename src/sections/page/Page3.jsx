import { useRef } from "react";
import * as Unicons from "@iconscout/react-unicons";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import {
  TypingEffect,
  ContainerPage3,
  TypingContainer,
  IconContainer,
  text,
  text2,
  styleIcon,
  iconSize,
} from "../../components";

export const Page3 = () => {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const options = {
    threshold: 0.5,
  };
  const isIntersecting = useIntersectionObserver(ref, options);
  const isIntersecting2 = useIntersectionObserver(ref2, options);
  const isIntersecting3 = useIntersectionObserver(ref3, options);
  const isIntersecting4 = useIntersectionObserver(ref4, options);
  const isIntersecting5 = useIntersectionObserver(ref5, options);
  const isIntersecting6 = useIntersectionObserver(ref6, options);

  return (
    <ContainerPage3>
      <TypingContainer ref={ref}>
        {isIntersecting && <TypingEffect text={text} />}
      </TypingContainer>
      <IconContainer>
        <span ref={ref2} className={`${isIntersecting2 && "visible"}`}>
          <Unicons.UilHtml5 style={styleIcon} color="#f24400" size={iconSize} />
        </span>
        <span ref={ref3} className={`${isIntersecting3 && "visible"}`}>
          <Unicons.UilCss3Simple
            style={styleIcon}
            color="#006cb0"
            size={iconSize}
          />
        </span>
        <span ref={ref4} className={`${isIntersecting4 && "visible"}`}>
          <Unicons.UilJavaScript
            style={styleIcon}
            color="#f1d222"
            size={iconSize}
          />
        </span>
        <span ref={ref5} className={`${isIntersecting5 && "visible"}`}>
          <Unicons.UilReact style={styleIcon} color="#00d1f0" size={iconSize} />
        </span>
      </IconContainer>

      <TypingContainer ref={ref6}>
        {isIntersecting6 && <TypingEffect text={text2} />}
      </TypingContainer>
    </ContainerPage3>
  );
};
