import { MouseScrolling } from "../../page 1/MouseScrolling";
import { useModal } from "../../../hook/useModal";
import { ModalContact } from "./ModalContact";

export const ModalContactItems = () => {
  const { onOpenModal, showModal, onCloseModal } = useModal();
  return (
    <>
      <button onClick={onOpenModal}>Abrir modal 3</button>
      <ModalContact showModal={showModal} onCloseModal={onCloseModal}>
        <MouseScrolling />
        <MouseScrolling />
      </ModalContact>
    </>
  );
};
