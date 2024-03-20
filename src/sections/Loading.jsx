import { lazy, useEffect, useState, Suspense } from "react";
import { Loader } from "@/components";
import { TotalSections } from "./TotalSections";
import useDeviceType from "@/hook/useDeviceType";

const CustomCursor = lazy(() => import("@/components/CustomCursor"));

export const Loading = () => {
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000); //3000
  }, []);
  const deviceType = useDeviceType();

  return (
    <>
      {!Loaded ? (
        <Loader />
      ) : (
        <>
          {deviceType === "desktop" && (
            <Suspense fallback={null}>
              <CustomCursor />
            </Suspense>
          )}
          <TotalSections />
        </>
      )}
    </>
  );
};
