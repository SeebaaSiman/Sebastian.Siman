import { useEffect, useState } from "react";

export const useMousePosition = (ref) => {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 useEffect(() => {
  const handleMouseMove = (e) => {
   const { width, height } = ref.current.getBoundingClientRect();
   const mouseX = e.clientX;
   const mouseY = e.clientY;

   const centerX = width / 3.5;
   const centerY = height / 2;

   // Establece la posición del elemento para que esté centrado en el cursor
   const newX = mouseX - centerX;
   const newY = mouseY - centerY;
   setMousePosition({ x: newX, y: newY });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => {
   window.removeEventListener("mousemove", handleMouseMove);
  };
 }, []);
 const { x, y } = mousePosition;
 return { x, y }
}
