import { MouseScrolling } from "../../page 1/MouseScrolling";
import { useModal } from "../../../hook/useModal";
import { ModalContact } from "./ModalContact";
import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";

export const ModalContactItems = () => {
  const { handleMouseLeave, handleMouseEnter } = useContext(CursorContext);
  const { toggleModal, showModal } = useModal();
  return (
    <>
      <button
        onClick={toggleModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        contactarte
      </button>
      <ModalContact showModal={showModal} toggleModal={toggleModal}>
        <MouseScrolling />
        <MouseScrolling />
      </ModalContact>
    </>
  );
};
