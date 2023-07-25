import { useContext } from "react";
import { useLanguage } from "./LanguageContext";
import { CursorContext } from "../components";
import { SwitchContainer } from "./switchStyle";
import eeuu from "./eeuu.png";
import spain from "./spain.png";
export const SwitchLanguage = () => {
  const { setLanguage, language, texts } = useLanguage();
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);

  const eeuuSelect = {
    filter: language === "es" ? "grayscale(1)" : "grayscale(0)",
  };
  const spainSelect = {
    filter: language === "en" ? "grayscale(1)" : "grayscale(0)",
  };
  return (
    <SwitchContainer>
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
