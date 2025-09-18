import { useCustomCursorContext } from "../hook/useContextProvider";
import { useCustomCursor } from "../hook/useCustomCursor";
import { CursorWrapperStyle } from "../styles/custon-cursor-style";

const CustomCursor = () => {
  const { size } = useCustomCursorContext();

  const { secondaryCursor, isMouseMoving } = useCustomCursor();

  return (
    <CursorWrapperStyle className={`${isMouseMoving ? "active" : "idle"}`}>
      <div className={`${size}  ${isMouseMoving ? "" : "idle"}`} ref={secondaryCursor} />
    </CursorWrapperStyle>
  );
};
export default CustomCursor;
