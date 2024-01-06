import { useState } from "react";

export const useProjectAnimation = (dataProjects) => {
 //El useState será un array con una longitud igual a la cantidad de elementos en la variable "dataProjects" y con fill todos los elementos se inicializan en 0
 const [rotationPosition, setRotation] = useState(
  new Array(dataProjects.length).fill(0)
 );
 const [activeIndex, setActiveIndex] = useState(-1);

 const [isLinkActive, setIsLinkActive] = useState(false); //* Mobile

 //efecto de rotación de las imágenes
 const handleSetRotation = (itemIndex) => {
  // Random between -7 and 7
  const newRotation =
   Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);

  const tempState = [...rotationPosition];
  tempState[itemIndex] = newRotation;
  setRotation(tempState);
  setActiveIndex(itemIndex);
 };

 // Toggle isLinkActive , será true cuando ya esté seleccionado
 const handleActiveLink = (index) => {
  setActiveIndex(index);
  // Si el enlace ya está activo, configurar isLinkActive para abrir el enlace
  if (activeIndex === index) {
   setIsLinkActive(true);
  } else {
   setIsLinkActive(false);
  }
 };

 const handleDesactiveLink = () => {
  handleActiveLink(-1);
  setIsLinkActive(false);
 }
 return {
  handleSetRotation,
  activeIndex,
  setActiveIndex,
  handleActiveLink,
  isLinkActive,
  rotationPosition, handleDesactiveLink
 }
}
