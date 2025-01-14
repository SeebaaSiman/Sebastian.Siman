function SplitSection({ direction, isOpen, children }) {
  return <div className={`split-column ${direction} ${isOpen ? "open" : ""}`}>{children}</div>;
}

export default SplitSection;
