import ReactDOM from "react-dom";
import { ModalContainer } from "../../style/modalStyle";

import { ButtonModal } from "./ButtonModal";
import {
  useCustomCursorContext,
  useNavBarContext,
  useModalContext,
} from "/src/hook";
 

export const Modals = () => {
  const { handleCursorSmall } = useCustomCursorContext();
  const { scrollToSection, page1Ref } = useNavBarContext();
  const { modalItem, modalClass, clousing, showModal, closeModal } =
    useModalContext();


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
