import CursorManager from "./components/cursor/CustomManager";
import { Loading } from "./Loading";
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
