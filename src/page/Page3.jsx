import { useRef } from "react";
import useIntersectionObserver from "../hook/useIntersectionObserver";
import {
  TypingEffect,
  Container,
  TypingContainer,
  text,
  text2,
} from "../components/page 3";

export const Page3 = () => {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const options = {
    threshold: 0.5,
  };
  const isIntersecting = useIntersectionObserver(ref, options);
  const isIntersecting2 = useIntersectionObserver(ref2, options);
  const isIntersecting3 = useIntersectionObserver(ref2, options);
  return (
    <Container>
      <TypingContainer ref={ref}>
        {isIntersecting && <TypingEffect text={text} />}
      </TypingContainer>
      <h1 ref={ref2} className={`${isIntersecting2 ? "visible" : ""}`}>
        Logo de html css js react
      </h1>
      <TypingContainer ref={ref3}>
        {isIntersecting3 && <TypingEffect text={text2} />}
      </TypingContainer>
    </Container>
  );
};
