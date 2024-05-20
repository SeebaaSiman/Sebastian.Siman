import { useState, useEffect } from "react";
import { LoaderContent } from "@/style/loaderStyle";
import logo from "@/assets/s-s.svg";
const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  if (visible) {
    return (
      <LoaderContent>
        SEBASTIÁN SIMAN | PORTFOLIO &copy;{new Date().getFullYear()}
        <img src={logo} alt="logo" loading="lazy" />
      </LoaderContent>
    );
  }
  if (!visible) {
    return null;
  }
};
export default Loader;
