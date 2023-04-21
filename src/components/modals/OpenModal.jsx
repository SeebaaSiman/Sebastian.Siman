import { useContext } from "react";
import { CursorContext } from "../cursor/CustomManager";
import { Modal } from "./Modal";
import { ModalContext } from "./ModalManager";

export const OpenModal = ({ children, text, toggleClass }) => {
  const { handleCursorRegular, handleCursorSmall } = useContext(CursorContext);

  const { openModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    openModal(children, toggleClass);
  };
  return (
    <>
      <button
        onClick={handleOpenModal}
        onMouseEnter={handleCursorRegular}
        onMouseLeave={handleCursorSmall}
      >
        {text}
      </button>
      <Modal />
    </>
  );
};
