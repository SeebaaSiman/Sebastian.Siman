import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";
import { useModal } from "../../../hook/useModal";
import { Modal } from "./Modal";

export const OpenModal = ({ children, text, toggleClass }) => {
  const { handleMouseLeave, handleMouseEnter } = useContext(CursorContext);
  const { toggleModal, showModal } = useModal();
  return (
    <>
      <button
        onClick={toggleModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
