import { useEffect, useState } from "react";
import { Loader } from "./components/loader";
import { CustomCursor } from "./components/cursor";
import { TotalSections } from "./sections/TotalSections";
import useDeviceType from "./hook/useDeviceType";
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
