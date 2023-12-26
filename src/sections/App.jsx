import CursorManager from "@/components/cursor/CustomManager";
import { StyleGlobal } from "@/style/StyleGlobal";
import useDeviceType from "@/hook/useDeviceType";
import { usePageVisibility } from "@/hook";
import { Loading } from "./Loading";

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
