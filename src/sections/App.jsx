import { CursorProvider } from "/src/context";
import { StyleGlobal } from "@/style/StyleGlobal";
import useDeviceType from "@/hook/useDeviceType";
import { usePageVisibility } from "@/hook";
import { Loading } from "./Loading";

export const App = () => {
  usePageVisibility("¡No te vayas! ¡Vuelve!");
  const deviceType = useDeviceType();
  return (
    <CursorProvider>
      <StyleGlobal deviceType={deviceType} />
      <Loading />
    </CursorProvider>
  );
};
