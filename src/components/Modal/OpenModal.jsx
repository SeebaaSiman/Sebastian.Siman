import { Modals } from "./";
import {
  useCustomCursorContext,
  useModalContext,
  useNavBarContext,
} from "/src/hook";

export const OpenModal = ({ children, text, toggleClass }) => {
  const { handleCursorRegular, handleCursorSmall } = useCustomCursorContext();
  const { onOpenModal } = useModalContext();
  const { scrollToSection, page1Ref } = useNavBarContext();

  const handleOpenModal = () => {
    onOpenModal(children, toggleClass);
    setTimeout(() => {
      scrollToSection(page1Ref);
    }, 800);
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
