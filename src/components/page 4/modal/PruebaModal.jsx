import { useState } from "react";
import { Modal } from "./Modal";
import { useRef } from "react";

export const PruebaModal = () => {
  const [showModal, setShowModal] = useState(false);
//   const modalRef = useRef(null);

  const handleOpenModal = () => {
    setShowModal(true);
    // modalRef.current?.classList.add("openModal");
  };

  const handleCloseModal = () => {
    setShowModal(false);

    // modalRef.current.classList.add("closeModal");
    // setTimeout(() => {
    //   setShowModal(false);
    //   modalRef.current.classList.remove("closeModal", "openModal");
    // }, 500); // duración de la animación de salida
  };
  return (
    <>
      <button onClick={handleOpenModal}>Abrir modal</button>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
        //   modalRef={modalRef}
          showModal={showModal}
        />
      )}
    </>
  );
};
