import { StyleGlobal } from "@/style/StyleGlobal";
import useDeviceType from "@/hook/useDeviceType";
import { usePageVisibility, useModalContext, useModalScrollLock } from "@/hook";
import { Loading } from "./Loading";

export const App = () => {
  usePageVisibility("¡No te vayas! ¡Vuelve!");
  const deviceType = useDeviceType();

  const { showModal } = useModalContext();

  useModalScrollLock(showModal);
  return (
    <>
      <StyleGlobal deviceType={deviceType} />
      <Loading />
    </>
  );
};
