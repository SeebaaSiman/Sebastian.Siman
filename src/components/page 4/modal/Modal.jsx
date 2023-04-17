import ReactDOM from "react-dom";
import { useModal } from "../../../hook/useModal";
import { Button, ModalContainer, ModalLeft, ModalRight } from "./modalStyle";

export const Modal = ({ children, showModal, toggleModal, toggleClass }) => {
  const { modalClass, showOut, resetClousing } = useModal();

  const onClose = () => {
    showOut();
    setTimeout(() => {
      toggleModal();
      resetClousing();
    }, 750);
  };

  const classStyle = toggleClass;
  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <ModalContainer className={toggleClass}>
            <Button onClick={onClose}>Cerrar </Button>
            <ModalLeft className={modalClass} variant={classStyle}>
              {children}
            </ModalLeft>
            <ModalRight
              className={modalClass}
              variant={classStyle}
            ></ModalRight>
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};

//! Button va a ser un componente que es una flecha, al hacer hover hace efecto y al hacer click se cierra el modal
