import { useEffect, useRef, useState } from "react";
import { useCustomCursorContext } from "./useContextProvider";

export const useFlipLink = () => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();
  const [hovered, setHovered] = useState(false);
  const textLayerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (textLayerRef.current) {
        const { width, height } = textLayerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();

    // Recalcular dimensiones si la ventana cambia de tamaño
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  useEffect(() => {
    const updateDimensions = () => {
      if (textLayerRef.current) {
        const { height } = textLayerRef.current.getBoundingClientRect();
        let width = textLayerRef.current.children.length * 40;
        setDimensions({ width, height });
      }
    };

    updateDimensions();

    // Recalcular dimensiones si la ventana cambia de tamaño
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  const mouseEnter = () => {
    setHovered(true);
    handleCursorXs();
  };
  const mouseLeave = () => {
    setHovered(false);
    handleCursorSmall();
  };
  return { mouseEnter, mouseLeave, dimensions, textLayerRef, hovered };
};
