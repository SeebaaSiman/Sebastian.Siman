import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [clousing, setClousing] = useState(false);

  const modalClass = clousing ? "close-modal" : "";
  
  const onOpenModal = () => {
    setShowModal(true);
    setClousing(false);
  };

  const onCloseModal = () => setShowModal(false)

  const showOut = () => setClousing(true);

  return { onOpenModal, showOut, showModal, onCloseModal, modalClass, clousing }
}

// const showOut = async () => {
//   setClousing(true);
//   await new Promise(resolve => setTimeout(resolve, 3000));
//   onCloseModal();
// };
