import { Page1, Page2, Page3 } from "./page";
import { StyleGlobal } from "./style";
import { CustomCursor } from "./style/cursor/CustomCursor";
import CursorManager from "./style/cursor/CustomManager";
export default function App() {
  return (
    <CursorManager>
      <CustomCursor />
      <StyleGlobal />
      <Page1 />
      <Page2 />
      <Page3 />
    </CursorManager>
  );
}

//! Loader con el icon ss , gira se scala y cuando vuelve desaparece, opacidad. luego se abre en dos y aparece la pág.
