import useDeviceType from "@/hook/useDeviceType";
import { DesktopHorizontal } from "./horizontal-device/DesktopHorizontal";
import { MobileAndTabletHorizon } from "./horizontal-device/MobileAndTabletHorizon";

export const SectionHorizontal = () => {
  const deviceType = useDeviceType();

  if (deviceType === "desktop") {
    return <DesktopHorizontal />;
  } else {
    return <MobileAndTabletHorizon />;
  }
};
