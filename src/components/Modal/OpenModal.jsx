import { useContext } from "react";
import { CursorContext } from "@/components/cursor/CustomManager";
import { Modal } from "./";
import { ModalContext } from "./ModalManager";

export const OpenModal = ({ children, text, toggleClass }) => {
  const { handleCursorRegular, handleCursorSmall } = useContext(CursorContext);

  const { onOpenModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    onOpenModal(children, toggleClass);
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
