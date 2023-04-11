import ReactDOM from "react-dom";
import {
  Button,
  ModalContainer,
  ModalLeft,
  ModalRight,
} from "../modal projects/modalProjectsStyle";
import { useModal } from "../../../hook/useModal";

export const ModalContact = ({ children, showModal, onCloseModal }) => {
  const { modalClass, showOut } = useModal();
  const onClose = () => {
    showOut();
    setTimeout(() => {
      onCloseModal();
    }, 500);
  };
  const children1 = children[0];
  const children2 = children[1];
  //   {variable !== null && <... >}
  //   {variable == null && <... >}

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <ModalContainer>
            <Button onClick={onClose}>Cerrar modal </Button>
            <ModalLeft className={modalClass}>{children1}</ModalLeft>
            <ModalRight className={modalClass}>{children2}</ModalRight>
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};
