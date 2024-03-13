import { CursorWrapper, SecondaryCursor } from "/src/style";
import { useCustomCursorContext, useCustomCursor } from "/src/hook";

export const CustomCursor = () => {
  const { size } = useCustomCursorContext();

  const { secondaryCursor, isMouseMoving } = useCustomCursor();
  //Si isMouseMoving es true, se agrega la clase css "active" , si es false no se mueve y se agrega "idle"
  return (
    <CursorWrapper className={`  ${isMouseMoving ? "active" : "idle"}`}>
      <SecondaryCursor
        className={`${size}`}
        ref={secondaryCursor}
      ></SecondaryCursor>
    </CursorWrapper>
  );
};

// Importar como componente. Por ejemplo luego de un loader.
