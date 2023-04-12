import { Title } from "../../page 1/Title";
import { ModalProject } from "./ModalProject";
import { TypingEffect } from "./TypingEffect";
import { useModal } from "../../../hook/useModal";

export const ModalProjectItems = () => {
  const { showModal, toggleModal } = useModal();
  return (
    <>
      <button onClick={toggleModal}>IR</button>
      <ModalProject showModal={showModal} toggleModal={toggleModal}>
        <TypingEffect />
        <Title />
      </ModalProject>
    </>
  );
};
