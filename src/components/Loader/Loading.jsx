import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { CustomCursor } from "../cursor";
import { TotalSections } from "../../sections/TotalSections";
export const Loading = () => {
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  //3000

  return (
    <>
      {!Loaded ? (
        <Loader />
      ) : (
        <>
          <CustomCursor />
          <TotalSections />
        </>
      )}
    </>
  );
};
