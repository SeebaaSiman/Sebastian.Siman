import { ModalProject } from "./ModalProject";
import { useModal } from "../../../hook/useModal";
import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";
import { ListProjectsEffect } from "./ListProjectsEffect";
export const ModalProjectItems = () => {
  const { handleMouseLeave, handleMouseEnter } = useContext(CursorContext);
  const { showModal, toggleModal } = useModal();

  return (
    <>
      <button
        onClick={toggleModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        IR
      </button>
      <ModalProject showModal={showModal} toggleModal={toggleModal}>
        <ListProjectsEffect />
      </ModalProject>
    </>
  );
};
