import { createContext, useState } from "react";

//Crear contexto y sus valores default
export const ModalContext = createContext({
  showModal: "false",
  setShowModal: () => {},
  modalItem: [],
  setModalItem: () => {},
  modalClass: "",
  setModalClass: () => {},
  clousing: "",
  setClousing: () => {},
  openModal: () => {},
  closeModal: () => {},
});

// Crear el manager que es el provider y sus estados y funciones que quiero mandar al contexto
export const ModalManager = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState([]);
  const [modalClass, setModalClass] = useState("");
  const [clousing, setClousing] = useState("");

  const openModal = (item, description) => {
    setShowModal(true);
    setModalItem(item);
    setModalClass(description);
  };

  const closeModal = () => {
    setClousing("close");
    setTimeout(() => {
      setShowModal(false);
      setModalItem([]);
      setModalClass("");
      setClousing("");
    }, 750);
  };

  const contextValue = {
    showModal,
    modalItem,
    modalClass,
    openModal,
    clousing,
    closeModal,
  };
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
