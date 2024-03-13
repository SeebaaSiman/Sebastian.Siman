import { useEffect, useState } from "react";

export const useContainerHeight = (ref) => {
 const [containerHeight, setContainerHeight] = useState(null);

 const updateDimensions = () => {
  const height = ref?.current?.getBoundingClientRect()?.height;
  setContainerHeight(height);
 };

 useEffect(() => {
  // Ejecutar la función de actualización al montar el componente
  updateDimensions();
  // Agregar un listener para actualizar cuando cambie el ancho de la ventana
  window.addEventListener("resize", updateDimensions);
  // Limpiar el listener cuando el componente se desmonta
  return () => {
   window.removeEventListener("resize", updateDimensions);
  };
 }, []);
 return { containerHeight }
}
