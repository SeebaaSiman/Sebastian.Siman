import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";
import { useModal } from "../../../hook/useModal";
import { Modal } from "./Modal";

export const OpenModal = ({ children, text, toggleClass }) => {
  const { handleCursorRegular, handleCursorSmall } = useContext(CursorContext);
  const { toggleModal, showModal } = useModal();
  return (
    <>
      <button
        onClick={toggleModal}
        onMouseEnter={handleCursorRegular}
        onMouseLeave={handleCursorSmall}
      >
        {text}
      </button>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        toggleClass={toggleClass}
      >
        {children}
      </Modal>
    </>
  );
};
