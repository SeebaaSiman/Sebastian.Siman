import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [clousing, setClousing] = useState(false);

  const modalClass = clousing ? "close-modal" : "";
  const toggleModal = () => setShowModal(!showModal)
  const showOut = () => setClousing(true);
  const resetClousing = () => setClousing(false)

  return { showOut, showModal, modalClass, toggleModal, resetClousing }
}