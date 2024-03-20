import { Suspense, lazy } from "react";

const Page3 = lazy(() => import("../../components/Page3"));
const Page4 = lazy(() => import("../../components/Page4"));
const MobileAndTabletHorizon = () => {
  return (
    <Suspense fallback={null}>
      <Page3 />
      <Page4 />
    </Suspense>
  );
};
export default MobileAndTabletHorizon;
