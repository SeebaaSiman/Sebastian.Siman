import { useRef } from "react";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
import { ContainerPage3, Text } from "@/style";
import { useLanguage } from "/src/hook";
import { IconsLanguages } from "./IconsLanguages";
const Page3 = () => {
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
export default Page3;
