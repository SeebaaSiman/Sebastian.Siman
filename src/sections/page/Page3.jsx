import { useRef } from "react";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import {
  ContainerPage3,
  IconsLanguages,
  speech4,
  speech5,
  TypingContainer,
  TypingEffect,
} from "../../components";

export const Page3 = () => {
  const ref = useRef();
  const ref6 = useRef();
  const options = {
    threshold: 0.5,
  };
  const isIntersecting = useIntersectionObserver(ref, options);

  const isIntersecting6 = useIntersectionObserver(ref6, options);

  return (
    <ContainerPage3>
      <TypingContainer ref={ref}>
        {isIntersecting && <TypingEffect text={speech4} />}
      </TypingContainer>
      <IconsLanguages />
      <TypingContainer ref={ref6}>
        {isIntersecting6 && <TypingEffect text={speech5} />}
      </TypingContainer>
    </ContainerPage3>
  );
};
