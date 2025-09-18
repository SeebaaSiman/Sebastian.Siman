import eeuu from "../../../assets/flag/eeuu.png";
import spain from "../../../assets/flag/spain.png";
import { useCustomCursorContext, useLanguage } from "../../../hook/useContextProvider";
import { SwitchLanguageStyle, LanguageOption } from "../../../styles/switch-language-style";

export const SwitchLanguage = () => {
  const { setLanguage, language, texts } = useLanguage();
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();

  return (
    <SwitchLanguageStyle>
      <LanguageOption
        className={`  ${language === "es" ? "visible" : "hidden"}`}
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("en")}
        aria-label='Switch to English'
      >
        <img src={eeuu} alt='eeuu flag' loading='lazy' />
        {texts.english}
      </LanguageOption>
      <LanguageOption
        className={`  ${language === "en" ? "visible" : "hidden"}`}
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("es")}
        aria-label='Cambiar a español'
      >
        <img src={spain} alt='spain flag' loading='lazy' />
        {texts.spain}
      </LanguageOption>
    </SwitchLanguageStyle>
  );
};
