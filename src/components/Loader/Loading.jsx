import { useEffect, useState } from "react";
import { Sections } from "../../Sections";
import { Loader } from "./Loader";
import { CustomCursor } from "../cursor/CustomCursor";

export const Loading = () => {
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
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
  // if (!Loaded) {
  //   return <Loader />;
  // }
  // if (Loaded) {
  //   return (
  //     <>
  //       <CustomCursor />
  //       <Sections />
  //     </>
  //   );
  // }
};
