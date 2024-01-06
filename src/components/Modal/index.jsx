import ReactDOM from "react-dom";
import { useContext } from "react";
import { ModalContainer } from "./modalStyle";
import { CursorContext } from "@/components/cursor/CustomManager";
import { ButtonModal } from "@/components/Page4/ButtonModal";
import { ModalContext } from "./ModalManager";
import { NavBarContext } from "../menu/NavBarManager";

export const Modal = () => {
  const { handleCursorSmall } = useContext(CursorContext);
  const { scrollToSection, page1Ref } = useContext(NavBarContext);
  const { modalItem, modalClass, clousing, showModal, closeModal } =
    useContext(ModalContext);
  const onClose = () => {
    scrollToSection(page1Ref);
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
