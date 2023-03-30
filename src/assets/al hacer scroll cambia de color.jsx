import  { useEffect } from "react";

export const alhacerscrollcambiadecolor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackgroundColor("gray");
      } else {
        setBackgroundColor("white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div style={{ backgroundColor }}>al hacer scroll cambia de color</div>;
};
