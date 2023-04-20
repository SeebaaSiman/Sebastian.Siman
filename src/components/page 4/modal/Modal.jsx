import ReactDOM from "react-dom";
import { useModal } from "../../../hook/useModal";
import { ModalContainer } from "./modalStyle";
import { ButtonModal } from "../ButtonModal";
import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";

export const Modal = ({ children, showModal, toggleModal, toggleClass }) => {
  const { handleCursorSmall } = useContext(CursorContext);
  const { modalClass, showOut, resetClousing } = useModal();

  const onClose = () => {
    showOut();
    handleCursorSmall();
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
          <ModalContainer
            className={`${toggleClass} ${modalClass}`}
            variant={classStyle}
          >
            <ButtonModal onClose={onClose}></ButtonModal>
            {children}
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};
