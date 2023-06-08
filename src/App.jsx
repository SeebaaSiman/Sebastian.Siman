import CursorManager from "./components/cursor/CustomManager";
import { Loading } from "./Loading";
import { StyleGlobal } from "./style/StyleGlobal";
import { usePageVisibility } from "./hook/usePageVisibility";
import useDeviceType from "./hook/useDeviceType";

export const App = () => {
  usePageVisibility("¡No te vayas! ¡Vuelve!");
  const deviceType = useDeviceType();

  return (
    <CursorManager>
      <StyleGlobal deviceType={deviceType} />
      <Loading />
    </CursorManager>
  );
};
