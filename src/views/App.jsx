import { lazy, Suspense } from "react";
import { StyleGlobal } from "@/style/StyleGlobal";
import {
  usePageVisibility,
  useModalContext,
  useModalScrollLock,
  useScrollTop,
} from "@/hook";
import useDeviceType from "@/hook/useDeviceType";

import Page2 from "../components/Page2";

const CustomCursor = lazy(() => import("/src/components/CustomCursor"));
const Loader = lazy(() => import("/src/components/Loader"));
const NavBar = lazy(() => import("/src/components/NavBar"));
const Page1 = lazy(() => import("/src/components/Page1"));
// const Page2 = lazy(() => import("/src/components/Page2"));
const DesktopHorizontal = lazy(() =>
  import("/src/views/DesktopHorizontal.jsx")
);
const Page3 = lazy(() => import("/src/components/Page3"));
const Page4 = lazy(() => import("/src/components/Page4"));

export const App = () => {
  usePageVisibility("¡No te vayas! ¡Vuelve!");
  const deviceType = useDeviceType();
  const { showModal } = useModalContext();
  useModalScrollLock(showModal);
  const { scrollValue } = useScrollTop();
  return (
    <main>
      <StyleGlobal deviceType={deviceType} />
      <Suspense fallback={null}>
        {deviceType === "desktop" && <CustomCursor />}
        <Loader />
        <NavBar scrollValue={scrollValue} />
        <Page1 scrollValue={scrollValue} />
        <Page2 />
        {deviceType === "desktop" ? (
          <DesktopHorizontal />
        ) : (
          <>
            <Page3 />
            <Page4 />
          </>
        )}
      </Suspense>
    </main>
  );
};
