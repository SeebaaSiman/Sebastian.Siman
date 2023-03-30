import { useEffect, useState } from "react";
import { Sections } from "../../Sections";
import { CustomCursor } from "../../style";
import { Loader } from "./Loader";

export const Loading = () => {
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);
  return (
    <>
      {!Loaded ? (
        <Loader />
      ) : (
        <>
          <CustomCursor />
          <Sections />
        </>
      )}
    </>
  );
};
