import { useContext, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { CursorContext } from "@/components";
import { SwitchContainer } from "@/style/switchStyle";
import eeuu from "./eeuu.png";
import spain from "./spain.png";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
export const SwitchLanguage = () => {
  const { setLanguage, language, texts } = useLanguage();
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);

  const eeuuSelect = {
    filter: language === "es" ? "grayscale(1)" : "grayscale(0)",
    scale: language === "es" ? "0.9" : "1",
    transition: "all 0.5s ease-in-out",
  };
  const spainSelect = {
    filter: language === "en" ? "grayscale(1)" : "grayscale(0)",
    scale: language === "en" ? "0.9" : "1",
    transition: "all 0.5s ease-in-out",
  };

  const refText = useRef();
  const options = {
    threshold: 1,
  };
  const isIntersecting = useIntersectionObserver(refText, options);
  const showAnimation = {
    opacity: isIntersecting ? "1" : "0",
    scale: isIntersecting ? "1" : "0.9",
    transform: isIntersecting ? "translateY(0)" : "translateY(-10%)",
    transition: "all 0.5s ease-in-out",
  };
  return (
    <SwitchContainer ref={refText} style={showAnimation}>
      <li
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("en")}
        style={eeuuSelect}
      >
        <img src={eeuu} alt="eeuu flag" />
        {texts.english}
      </li>
      <li
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("es")}
        style={spainSelect}
      >
        <img src={spain} alt="spain flag" />
        {texts.spain}
      </li>
    </SwitchContainer>
  );
};
