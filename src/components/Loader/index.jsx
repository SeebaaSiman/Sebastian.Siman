import { useState, useEffect } from "react";
import { LoaderContent } from "./loaderStyle";
import logo from "./../../assets/s-s.svg";
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
        <img src={logo} />
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
