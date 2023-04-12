import ReactDOM from "react-dom";
import { useModal } from "../../../hook/useModal";
import {
  Button,
  ModalContainer,
  ModalLeft,
  ModalRight,
} from "./modalContactsStyle";

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
            <Button onClick={onClose}>Cerrar modal contact</Button>
            <ModalLeft className={modalClass}>{children1}</ModalLeft>
            <ModalRight className={modalClass}>{children2}</ModalRight>
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};
