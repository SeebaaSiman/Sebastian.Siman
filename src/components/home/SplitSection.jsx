import { SplitSectionStyle } from "../../styles/home-style.js";
const SplitSection = ({ direction, isOpen, children, handleTransitionEnd }) => {
  return (
    <SplitSectionStyle
      className={`${direction} ${isOpen ? "open" : ""}`}
      onTransitionEnd={handleTransitionEnd} // Aquí escuchas el fin de la transición
    >
      {children}
    </SplitSectionStyle>
  );
};

export default SplitSection;
