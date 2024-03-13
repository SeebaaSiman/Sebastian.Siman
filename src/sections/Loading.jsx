import { useEffect, useState } from "react";
import { Loader, CustomCursor } from "@/components";
import { TotalSections } from "./TotalSections";
import useDeviceType from "@/hook/useDeviceType";
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
          {deviceType === "desktop" && <CustomCursor />}
          <TotalSections />
        </>
      )}
    </>
  );
};
