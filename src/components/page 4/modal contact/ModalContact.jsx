import ReactDOM from "react-dom";
import { useModal } from "../../../hook/useModal";
import {
  Button,
  ModalContainer,
  ModalLeft,
  ModalRight,
} from "./modalContactsStyle";

export const ModalContact = ({ children, showModal, toggleModal }) => {
  const { modalClass, showOut, resetClousing } = useModal();
  const onClose = () => {
    showOut();
    setTimeout(() => {
      toggleModal();
      resetClousing();
    }, 700);
  };

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <ModalContainer>
            <Button onClick={onClose}>Cerrar modal contact</Button>
            <ModalLeft className={modalClass}>{children}</ModalLeft>
            <ModalRight className={modalClass}></ModalRight>
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};
//   {variable !== null && <... >}
//   {variable == null && <... >}
