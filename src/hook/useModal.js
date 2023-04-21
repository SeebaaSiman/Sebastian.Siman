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


// const Page4 = () => {
//   const handleOpenModal = (item, nameClass) => {
//     setModalContent({
//       content: item,
//       className: nameClass,
//     });
//     toggleModal();
//   };
//   const { showModal, toggleModal, setModalContent } = useContext(ModalContext);

//   const item = <ListProjectsEffect />
//   const nameClass = "Projects"
//   handleOpenModal(item, nameClass)
//   // rest of the component code
// };