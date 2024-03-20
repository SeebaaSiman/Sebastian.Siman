// useModalScrollLock.js
import { useEffect } from 'react';

export const useModalScrollLock = (showModal) => {
 useEffect(() => {
  const handleWheel = (e) => {
   if (showModal) {
    e.preventDefault();
   }
  };

  // Agregar evento wheel al body
  document.body.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
   // Remover evento wheel al desmontar el componente
   document.body.removeEventListener("wheel", handleWheel);
  };
 }, [showModal]);
};
