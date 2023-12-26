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
  };
  const spainSelect = {
    filter: language === "en" ? "grayscale(1)" : "grayscale(0)",
  };

  const refText = useRef();
  const options = {
    threshold: 1,
  };
  const isIntersecting = useIntersectionObserver(refText, options);
  const showAnimation = {
    opacity: isIntersecting ? "1" : "0",
    scale: isIntersecting ? "1" : "0.8",
    transition: "all .5s ease-in-out",
  };
  return (
    <SwitchContainer ref={refText} style={showAnimation}>
      <li
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("en")}
      >
        <img src={eeuu} alt="eeuu flag" style={eeuuSelect} />
        {texts.english}
      </li>
      <li
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("es")}
      >
        <img src={spain} alt="spain flag" style={spainSelect} />
        {texts.spain}
      </li>
    </SwitchContainer>
  );
};
