import { useState, createContext } from "react";

export const HorizontalSectionContext = createContext();

export const HorizontalSectionProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (scrollTo) => {
    const newPosition = Math.max(0, Math.min(scrollPosition + scrollTo, 100));
    setScrollPosition(newPosition);
    // window.scrollTo(0, 0);
  };

  return (
    <HorizontalSectionContext.Provider value={{ handleScroll, scrollPosition, setScrollPosition }}>
      {children}
    </HorizontalSectionContext.Provider>
  );
};
