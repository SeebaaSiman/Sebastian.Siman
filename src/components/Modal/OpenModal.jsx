import { Modals } from "./";
import { useCustomCursorContext, useModalContext } from "/src/hook";

export const OpenModal = ({ children, text, toggleClass }) => {
  const { handleCursorRegular, handleCursorSmall } = useCustomCursorContext();

  const { onOpenModal } = useModalContext();

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
      <Modals />
    </>
  );
};
