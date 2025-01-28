import eeuu from "../assets/flag/eeuu.png";
import spain from "../assets/flag/spain.png";
import { useCustomCursorContext, useLanguage } from "../hook/useContextProvider";

export const SwitchLanguage = () => {
  const { setLanguage, language, texts } = useLanguage();
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();

  return (
    <ul className='switch-language-container '>
      <li
        className={`language-option ${language === "es" ? "visible" : "hidden"}`}
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("en")}
        aria-label='Switch to English'
      >
        <img src={eeuu} alt='eeuu flag' loading='lazy' className="flag-language"/>
        {texts.english}
      </li>
      <li
        className={`language-option ${language === "en" ? "visible" : "hidden"}`}
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        onClick={() => setLanguage("es")}
        aria-label='Cambiar a español'
      >
        <img src={spain} alt='spain flag' loading='lazy' className="flag-language"/>
        {texts.spain}
      </li>
    </ul>
  );
};
