import { MouseScrolling } from "../../page 1/MouseScrolling";
import { useModal } from "../../../hook/useModal";
import { ModalContact } from "./ModalContact";

export const ModalContactItems = () => {
  const { toggleModal, showModal } = useModal();
  return (
    <>
      <button onClick={toggleModal}>contactarte</button>
      <ModalContact showModal={showModal} toggleModal={toggleModal}>
        <MouseScrolling />
        <MouseScrolling />
      </ModalContact>
    </>
  );
};
