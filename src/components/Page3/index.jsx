import { useRef } from "react";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
import { ContainerPage3, Text } from "@/style";
import { useLanguage } from "@/language/LanguageContext";
import { IconsLanguages } from "./IconsLanguages";
export const Page3 = () => {
  const ref = useRef();
  const options = {
    threshold: 0.3,
  };
  const isIntersecting = useIntersectionObserver(ref, options);
  const { texts } = useLanguage();
  return (
    <ContainerPage3>
      <Text ref={ref} className={`${isIntersecting && "visible"}`}>
        {texts.speech4}
      </Text>
      <IconsLanguages />
    </ContainerPage3>
  );
};
