import { useCustomCursorContext } from "../hook/useContextProvider";
import { BtnGlassStyle } from "../styles/buttons";

export const BtnGlass = ({ children, fn, ahref, $right, $notfound }) => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();
  return (
    <BtnGlassStyle
      onClick={fn}
      onMouseEnter={!$notfound && handleCursorXs}
      onMouseLeave={!$notfound && handleCursorSmall}
      style={{
        top: $right ? "10px" : "",
        transform: $right ? "translateX(-50%)" : "",
        left: $right ? "50%" : "",
        position: $right ? "absolute" : "relative",
      }}
      href={ahref}
      download={$right && "CV.pdf"}
    >
      <span class='top-key'></span>
      <span class='text'>{children}</span>
      <span class='bottom-key-1'></span>
      <span class='bottom-key-2'></span>
    </BtnGlassStyle>
  );
};
