import { useRef } from "react";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import {
  ContainerPage3,
  IconsLanguages,
  LeftContainer,
  TypingContainer,
  TypingEffect,
} from "../../components";
import { useLanguage } from "../../language/LanguageContext";

export const Page3 = () => {

  const ref = useRef();
  const ref6 = useRef();
  const options = {
    threshold: 0.2,
  };
  const isIntersecting = useIntersectionObserver(ref, options);
  const isIntersecting6 = useIntersectionObserver(ref6, options);

  const { texts } = useLanguage();

  return (
    <ContainerPage3>
      <LeftContainer>
        <TypingContainer ref={ref}>
          {isIntersecting && <TypingEffect text={texts.speech3} />}
        </TypingContainer>
        <TypingContainer ref={ref6}>
          {isIntersecting6 && <TypingEffect text={texts.speech4} />}
        </TypingContainer>
      </LeftContainer>

      <IconsLanguages />
    </ContainerPage3>
  );
};
