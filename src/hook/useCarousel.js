import { useCallback, useEffect, useRef, useState } from "react";

export const useCarousel = (autoplay, intervalo, array, sensitivity, swipe) => {

 const [activeIndex, setActiveIndex] = useState(0);
 const [startX, setStartX] = useState(0);
 const [isDragging, setIsDragging] = useState(false);
 const [deltaX, setDeltaX] = useState(0);
 const InnerRef = useRef(null);
 const intervaloSlideshow = useRef(null);
 const InnerWidth = `${array?.length}00vw`;

 const tamañoSlide =
  InnerRef?.current?.children?.length > 0 &&
  InnerRef?.current?.offsetWidth / InnerRef?.current?.children?.length;
 //*Reset Carousel
 useEffect(() => {
  setActiveIndex(0)
 }, [array])

 //*función para cambiar de index por ende de img (buttons onClick)
 const updateIndex = useCallback((newIndex) => {
  if (newIndex < 0) {
   newIndex = 0;
  } else if (newIndex >= array?.length) {
   newIndex = array?.length - 1;
  }
  setActiveIndex(newIndex);
 }, [array]);

 //* autoplay
 useEffect(() => {
  if (autoplay) {
   intervaloSlideshow.current = setInterval(() => {
    updateIndex((prevIndex) => (prevIndex + 1) % array?.length);
   }, intervalo);
  }
  return () => {
   if (intervaloSlideshow.current) {
    clearInterval(intervaloSlideshow.current);
   }
  };
 }, [autoplay, array, intervalo, updateIndex]);
 //* fx pausar autoplay
 const autoplayPause = () => {
  if (autoplay && intervaloSlideshow.current) {
   clearInterval(intervaloSlideshow.current);
  }
 }
 //* fx reanudar autoplay
 const autoplayRestart = () => {
  if (autoplay) {
   intervaloSlideshow.current = setInterval(() => {
    updateIndex((prevIndex) => (prevIndex + 1) % array?.length);
   }, intervalo);
  }
 }
 //* eventos mouse

 const handleMouseEnter = () => {
  autoplayPause();
 };

 const handleMouseLeave = () => {
  autoplayRestart();
 };

 const handleMouseDown = (e) => {
  if (!swipe) return;

  setStartX(e.clientX);
  setIsDragging(true);
 };

 const handleMouseMove = (e) => {
  if (!swipe) return;
  if (!isDragging) return;

  const currentX = e.clientX;
  const newDeltaX = currentX - startX;

  setDeltaX(newDeltaX);
 };

 const handleMouseUp = () => {
  if (!swipe) return;
  if (!isDragging) return;

  setIsDragging(false);

  if (Math.abs(deltaX) > tamañoSlide * sensitivity) {
   if (deltaX > 0) {
    updateIndex(activeIndex - 1);
   } else {
    updateIndex(activeIndex + 1);
   }
  }
  setDeltaX(0);
 };

 const onMouseLeaveAndMouseUp = () => {
  handleMouseLeave();
  handleMouseUp();
 };



 //* Eventos touch
 const handleTouchStart = (e) => {
  autoplayPause();

  if (!swipe) {
   return
  } else {
   setStartX(e.touches[0].clientX);
   setIsDragging(true);
  }

 };

 const handleTouchMove = (e) => {
  if (!swipe) return;
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const newDeltaX = currentX - startX;
  setDeltaX(newDeltaX);
 };

 const handleTouchEnd = () => {
  autoplayRestart();
  if (!swipe || !isDragging) {
   return
  } else {
   setIsDragging(false);

   if (deltaX > tamañoSlide * sensitivity) {
    updateIndex(activeIndex - 1);
   } else if (deltaX < -tamañoSlide * sensitivity) {
    updateIndex(activeIndex + 1);
   }
   setDeltaX(0);
  }

 };

 return {
  InnerRef,
  InnerWidth,
  handleMouseEnter,
  handleMouseLeave,
  tamañoSlide,
  activeIndex,
  updateIndex,
  setActiveIndex,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
  onMouseLeaveAndMouseUp,
  handleMouseMove,
  handleMouseDown,
  handleMouseUp,
  deltaX,
  isDragging
 }
}
