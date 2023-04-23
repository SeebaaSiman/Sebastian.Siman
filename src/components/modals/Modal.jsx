import ReactDOM from "react-dom";
import { useContext } from "react";
import { ModalContainer, ModalContext } from "./";
import { CursorContext } from "../cursor/CustomManager";
import { ButtonModal } from "../page 4";

export const Modal = () => {
  const { handleCursorSmall } = useContext(CursorContext);

  const { modalItem, modalClass, clousing, showModal, closeModal } =
    useContext(ModalContext);
  const onClose = () => {
    handleCursorSmall();
    closeModal();
  };
  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <ModalContainer
            className={`${modalClass} ${clousing}`}
            variant={modalClass}
          >
            <ButtonModal
              onClose={onClose}
              modalClass={`${modalClass}`}
            ></ButtonModal>
            {modalItem}
          </ModalContainer>,
          document.querySelector("#portal")
        )}
    </>
  );
};
