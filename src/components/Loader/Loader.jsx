import { useState, useEffect } from "react";
import { LoaderContent } from "./loaderStyle";
export const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  if (visible) {
    return (
      <LoaderContent>
        SEBASTIÁN SIMAN | PORTFOLIO ©2023
        <img src={"/src/assets/s-s.svg"} />
      </LoaderContent>
    );
  }
  if (!visible) {
    return null;
  }

  // return visible ? (
  //   <LoaderContent>
  //     <Img src={"/src/assets/ss.png"} />
  //   </LoaderContent>
  // ) : null;
};
