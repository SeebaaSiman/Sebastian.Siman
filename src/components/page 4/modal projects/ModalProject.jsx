import ReactDOM from "react-dom";
import { useModal } from "../../../hook/useModal";
import {
  Button,
  ModalContainer,
  ModalLeft,
  ModalRight,
} from "./modalProjectsStyle";

export const ModalProject = ({ children, showModal, toggleModal }) => {
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
            <Button onClick={onClose}>Cerrar </Button>
            <ModalLeft className={modalClass}>{children}</ModalLeft>
            <ModalRight className={modalClass}></ModalRight>
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};
// const children1 = children[0];
// const children2 = children[1];
//   {variable !== null && <... >}
//   {variable == null && <... >}
