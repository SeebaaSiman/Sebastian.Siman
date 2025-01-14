import { useState, useEffect, useRef } from "react";
export const useOppositeScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const dragStartY = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let ticking = false;

    const handleWheel = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY((prev) => {
            const newScroll = prev + e.deltaY;
            return Math.max(0, Math.min(newScroll, 2 * window.innerHeight));
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setScrollY((prev) => Math.min(prev + window.innerHeight, 2 * window.innerHeight));
    } else if (e.key === "ArrowUp") {
      setScrollY((prev) => Math.max(prev - window.innerHeight, 0));
    }
  };

  const handleArrowUp = () => {
    if (scrollY <= 0) return;
    setScrollY((prev) => Math.min(prev - window.innerHeight, 2 * window.innerHeight));
  };
  const handleArrowDown = () => {
    setScrollY((prev) => Math.min(prev + window.innerHeight, 2 * window.innerHeight));
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseDown = (e) => {
    dragStartY.current = e.clientY;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragStartY.current !== null) {
      const deltaY = dragStartY.current - e.clientY;
      setScrollY((prev) => Math.max(0, Math.min(prev + deltaY, 2 * window.innerHeight)));
      dragStartY.current = e.clientY; // Actualizar la posición inicial
    }
  };

  const handleMouseUp = () => {
    dragStartY.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  const handleTouchStart = (e) => {
    dragStartY.current = e.touches[0].clientY;
  };
  const handleTouchMove = (e) => {
    if (dragStartY.current !== null) {
      const deltaY = dragStartY.current - e.touches[0].clientY;
      setScrollY((prev) => Math.max(0, Math.min(prev + deltaY, 2 * window.innerHeight)));
      dragStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = () => {
    dragStartY.current = null;
  };

  return {
    containerRef,
    scrollY,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleArrowUp,
    handleArrowDown,
  };
};
