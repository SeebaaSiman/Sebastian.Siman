import { Page1, Page2, Page3 } from "./page";
import { StyleGlobal } from "./style";
import { CustomCursor } from "./style/cursor/CustomCursor";
export default function App() {
  return (
    <>
      <CustomCursor />
      <StyleGlobal />
      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
}

//! Loader con el icon ss , gira se scala y cuando vuelve desaparece, opacidad. luego se abre en dos y aparece la pág.
