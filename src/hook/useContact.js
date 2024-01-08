import { useState } from "react";
import cv from "@/assets/sebastian siman cv.pdf";
export const useContact = (info) => {
 const [isActiveIcon, setIsActiveIcon] = useState(new Array(info?.length).fill(false));
 const [isActiveCopy, setIsActiveCopy] = useState(new Array(info?.length).fill(false));

 const onActiveIcon = (index) => {
  setIsActiveIcon((prevIsActive) => {
   const newIsActive = [...prevIsActive];
   // Cerrar todos los botones excepto el seleccionado
   for (let i = 0; i < newIsActive.length; i++) {
    if (i !== index) {
     newIsActive[i] = false;
    }
   }
   // Alternar el estado del botón seleccionado
   newIsActive[index] = !newIsActive[index];
   setTimeout(() => {
    onActiveIcon(false);
   }, 5000);
   return newIsActive;
  });
 };
 const onActiveCopy = (index) => {
  setIsActiveCopy((prevIsActive) => {
   const newIsActive = [...prevIsActive];
   // Cerrar todos los botones excepto el seleccionado
   for (let i = 0; i < newIsActive.length; i++) {
    if (i !== index) {
     newIsActive[i] = false;
    }
   }
   // Alternar el estado del botón seleccionado
   newIsActive[index] = !newIsActive[index];
   return newIsActive;
  });
 };

 const openPdf = () => {
  // Reemplaza la URL con la ruta de tu PDF
  const pdfUrl = cv;
  // Abrir el PDF en una nueva pestaña
  window.open(pdfUrl, "_blank");
 };
 return { onActiveCopy, onActiveIcon, openPdf, isActiveIcon, isActiveCopy }
}
