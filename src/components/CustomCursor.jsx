import { useCustomCursorContext } from "../hook/useContextProvider";
import { useCustomCursor } from "../hook/useCustomCursor";

const CustomCursor = () => {
  const { size } = useCustomCursorContext();

  const { secondaryCursor, isMouseMoving } = useCustomCursor();
  //Si isMouseMoving es true, se agrega la clase css "active" , si es false no se mueve y se agrega "idle"
  return (
    <div className={` cursor-wrapper ${isMouseMoving ? "active" : "idle"}`}>
      <div className={`second-cursor ${size}`} ref={secondaryCursor}></div>
    </div>
  );
};
export default CustomCursor;
// Importar como componente. Por ejemplo luego de un loader.
