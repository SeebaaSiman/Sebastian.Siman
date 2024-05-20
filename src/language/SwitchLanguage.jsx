import { SwitchContainer } from "@/style/switchStyle";
import eeuu from "./eeuu.png";
import spain from "./spain.png";
import { useCustomCursorContext, useLanguage } from "/src/hook";
export const SwitchLanguage = () => {
  const { setLanguage, language, texts } = useLanguage();
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();

  const eeuuSelect = {
    filter: language === "es" ? "grayscale(1)" : "grayscale(0)",
    transition: "all 0.5s ease-in-out",
  };
  const spainSelect = {
    filter: language === "en" ? "grayscale(1)" : "grayscale(0)",
    transition: "all 0.5s ease-in-out",
  };

  return (
    <SwitchContainer>
      <li
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("en")}
        style={eeuuSelect}
      >
        <img src={eeuu} alt="eeuu flag" loading="lazy" />
        {texts.english}
      </li>
      <li
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("es")}
        style={spainSelect}
      >
        <img src={spain} alt="spain flag" loading="lazy" />
        {texts.spain}
      </li>
    </SwitchContainer>
  );
};
