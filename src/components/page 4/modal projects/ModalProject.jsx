import ReactDOM from "react-dom";
import { useModal } from "../../../hook/useModal";
import {
  Button,
  ModalContainer,
  ModalLeft,
  ModalRight,
} from "./modalProjectsStyle";

export const ModalProject = ({ children, showModal, onCloseModal }) => {
  const { modalClass, showOut } = useModal();
  const onClose = () => {
    showOut();
    setTimeout(() => {
      onCloseModal();
    }, 550);
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
            <Button onClick={onClose}>Cerrar </Button>
            <ModalLeft className={modalClass}>{children1}</ModalLeft>
            <ModalRight className={modalClass}>{children2}</ModalRight>
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};

// const Modal = ({ modalOpen, handleCloseModal, children }) => {
//     return (
//       <div className="modal" ref={modalRef}>

//         <div className="modal-content">{children}</div>

//         <button className="modal-close" onClick={handleCloseModal}>
//           X
//         </button>
//       </div>
//     );
//   };
