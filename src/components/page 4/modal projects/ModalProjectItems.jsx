import { Title } from "../../page 1/Title";
import { ModalProject } from "./ModalProject";
import { TypingEffect } from "./TypingEffect";
import { useModal } from "../../../hook/useModal";

export const ModalProjectItems = () => {
  const { onOpenModal, showModal, onCloseModal } = useModal();
  return (
    <>
      <button onClick={onOpenModal}>Abrir modal</button>
      <ModalProject showModal={showModal} onCloseModal={onCloseModal}>
        <TypingEffect />
        <Title />
      </ModalProject>
    </>
  );
};
