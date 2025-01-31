import { useState, useRef, useCallback } from "react";
import { DRAG_THRESHOLD, VERTICAL_DRAG_THRESHOLD, calculateCardTransform } from "../utils/cardUtils";

export const useSwipeCards = ({ projects }) => {
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);

  const handleDragStart = (e) => {
    startXRef.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    startYRef.current = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
    setIsDragging(true);
  };
  const moveCardToFront = () => {
    setCurrentProjects((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };
  const moveCardToBack = () => {
    setCurrentProjects((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  const showProjectDetails = () => {
    setSelectedProject(currentProjects[0]);
  };
  const resetCardPosition = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.5s ease-out"; // Smooth reset animation

      cardRef.current.style.transform = calculateCardTransform(0, 0);
    }
    currentXRef.current = 0;
    currentYRef.current = 0;
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      moveCardToBack();
    } else if (e.key === "ArrowRight") {
      moveCardToFront();
    } else if (e.key === "ArrowDown") {
      showProjectDetails();
    }
  };

  const handleFocus = (e) => {
    if (cardRef.current) {
      cardRef.current.focus();
    }
  };
  // const handleDragMove = (e) => {
  //   if (!isDragging) return;
  //   e.preventDefault();

  //   const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
  //   const currentY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
  //   currentXRef.current = currentX - startXRef.current;
  //   currentYRef.current = currentY - startYRef.current;

  //   if (cardRef.current) {
  //     cardRef.current.style.transition = "none"; // Disable transition during drag
  //     cardRef.current.style.transform = calculateCardTransform(currentXRef.current, currentYRef.current);
  //   }
  // };

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const updatePosition = () => {
        const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        const currentY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
        currentXRef.current = currentX - startXRef.current;
        currentYRef.current = currentY - startYRef.current;

        if (cardRef.current) {
          cardRef.current.style.transition = "none";
          cardRef.current.style.transform = calculateCardTransform(currentXRef.current, currentYRef.current);
        }
      };

      requestAnimationFrame(updatePosition);
    },
    [isDragging]
  );

  // const handleDragEnd = () => {
  //   if (!isDragging) return;
  //   setIsDragging(false);
  //   const isSwipeLeft = currentXRef.current < -DRAG_THRESHOLD;
  //   const isSwipeRight = currentXRef.current > DRAG_THRESHOLD;
  //   const isSwipeDown = currentYRef.current > VERTICAL_DRAG_THRESHOLD;

  //   if (isSwipeLeft) {
  //     moveCardToBack();
  //   } else if (isSwipeRight) {
  //     moveCardToFront();
  //   } else if (isSwipeDown) {
  //     showProjectDetails();
  //   }

  //   resetCardPosition();
  // };

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const isSwipeLeft = currentXRef.current < -DRAG_THRESHOLD;
    const isSwipeRight = currentXRef.current > DRAG_THRESHOLD;
    const isSwipeDown = currentYRef.current > VERTICAL_DRAG_THRESHOLD;

    if (isSwipeLeft) {
      moveCardToBack();
    } else if (isSwipeRight) {
      moveCardToFront();
    } else if (isSwipeDown) {
      showProjectDetails();
    }

    resetCardPosition();
  }, [isDragging, moveCardToBack, moveCardToFront, showProjectDetails]);

  return {
    currentProjects,
    selectedProject,
    cardRef,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    closeModal,
    isDragging,
    handleKeyDown, // Nuevo
    handleFocus, // Nuevo
  };
};
