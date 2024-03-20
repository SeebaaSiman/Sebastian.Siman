import { Suspense, lazy } from "react";
import useDeviceType from "@/hook/useDeviceType";

const DesktopHorizontal = lazy(() =>
  import("./horizontal-device/DesktopHorizontal")
);
const MobileAndTabletHorizon = lazy(() =>
  import("./horizontal-device/MobileAndTabletHorizon")
);
export const SectionHorizontal = () => {
  const deviceType = useDeviceType();

  return (
    <Suspense fallback={null}>
      {deviceType === "desktop" ? (
        <DesktopHorizontal />
      ) : (
        <MobileAndTabletHorizon />
      )}
    </Suspense>
  );
};
