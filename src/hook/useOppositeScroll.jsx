import { useState, useEffect, useRef, useCallback } from "react";
export const useOppositeScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollYRef = useRef(scrollY);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  const SECTION_HEIGHT = window.innerHeight;
  const TOTAL_SECTIONS = 3;

  const setScrollYThrottled = useCallback((newScroll) => {
    if (scrollYRef.current !== newScroll) {
      scrollYRef.current = newScroll;
      setScrollY(newScroll);
    }
    resetTimer();
  }, []);

  useEffect(() => {
    scrollYRef.current = scrollY;
  }, [scrollY]);

  // Ajuste automático tras 4s sin scroll
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const sectionIndex = Math.round(scrollYRef.current / SECTION_HEIGHT);
      const sectionStart = sectionIndex * SECTION_HEIGHT;
      const diff = Math.abs(scrollYRef.current - sectionStart);
      if (diff > SECTION_HEIGHT * 0.5) {
        const nextSection = scrollYRef.current > sectionStart ? sectionIndex + 1 : sectionIndex;
        const newScrollY = Math.min(nextSection * SECTION_HEIGHT, (TOTAL_SECTIONS - 1) * SECTION_HEIGHT);
        setScrollYThrottled(newScrollY);
      } else {
        setScrollYThrottled(sectionStart);
      }
    }, 4000);
  }, [SECTION_HEIGHT, TOTAL_SECTIONS, setScrollYThrottled]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scrollY, resetTimer]);

  // Solo wheel y flechas
  useEffect(() => {
    const container = containerRef.current;
    let ticking = false;

    const handleWheel = (e) => {
      e.preventDefault();
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollYThrottled(
            Math.max(0, Math.min(scrollYRef.current + e.deltaY, (TOTAL_SECTIONS - 1) * SECTION_HEIGHT))
          );
          ticking = false;
        });
        ticking = true;
      }
    };
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) container.removeEventListener("wheel", handleWheel);
    };
  }, [setScrollYThrottled, TOTAL_SECTIONS, SECTION_HEIGHT]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") handleArrowDown();
      if (e.key === "ArrowUp") handleArrowUp();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const getSectionIndex = (scrollY) => Math.round(scrollY / SECTION_HEIGHT);
  const currentSection = getSectionIndex(scrollYRef.current);

  const handleArrowUp = () => {
    const newSection = Math.max(currentSection - 1, 0);
    setScrollYThrottled(newSection * SECTION_HEIGHT);
  };

  const handleArrowDown = () => {
    const newSection = Math.min(currentSection + 1, TOTAL_SECTIONS - 1);
    setScrollYThrottled(newSection * SECTION_HEIGHT);
  };
  return {
    containerRef,
    scrollY,
    handleArrowUp,
    handleArrowDown,
    SECTION_HEIGHT,
    TOTAL_SECTIONS,
  };
};
