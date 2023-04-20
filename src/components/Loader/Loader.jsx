import { useState, useEffect } from "react";
import { Img, LoaderContent } from "./loaderStyle";
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
        <Img src={"/src/assets/ss.png"} />
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
