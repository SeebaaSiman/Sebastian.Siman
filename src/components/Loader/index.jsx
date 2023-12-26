import { useState, useEffect } from "react";
import { LoaderContent } from "@/style/loaderStyle";
import logo from "@/assets/s-s.svg";
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
        SEBASTIÁN SIMAN | PORTFOLIO &copy;{new Date().getFullYear()}
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
