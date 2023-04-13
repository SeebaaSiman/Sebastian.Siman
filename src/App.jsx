import CursorManager from "./components/cursor/CustomManager";
import { Loading } from "./components/loader/Loading";
import { usePageVisibility } from "./hook/usePageVisibility";
import { StyleGlobal } from "./style/StyleGlobal";

export const App = () => {
  usePageVisibility("¡No te vayas! ¡Vuelve!");

  return (
    <CursorManager>
      <StyleGlobal />
      <Loading />
    </CursorManager>
  );
};
