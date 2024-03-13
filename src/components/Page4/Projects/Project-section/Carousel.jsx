import { useCarousel } from "/src/hook";
import {
  Slide,
  CarouselContainer,
  Inner,
  Indicators,
  ButtonArrow,
} from "/src/style";

export const Carousel = ({
  array, //imgs
  controls = false, // buttons
  autoplay = true,
  velocidad = "500",
  intervalo = "5000",
  swipe = true,
  sensitivity = 0.5, // Ajusta la sensibilidad del deslizamiento swipe
}) => {
  const {
    InnerRef,
    InnerWidth,
    handleMouseEnter,
    tamañoSlide,
    activeIndex,
    updateIndex,
    setActiveIndex,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    onMouseLeaveAndMouseUp,
    handleMouseUp,
    handleMouseMove,
    handleMouseDown,
    deltaX,
    isDragging,
  } = useCarousel(autoplay, intervalo, array, sensitivity, swipe);

  return (
    <CarouselContainer>
      <Inner
        ref={InnerRef}
        style={{
          width: InnerWidth,
          transform: `translateX(-${tamañoSlide * activeIndex - deltaX}px)`,
          transition: isDragging ? "none" : `${velocidad}ms ease-out all`,
        }}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={onMouseLeaveAndMouseUp}
      >
        {array?.map((item, index) => (
          <Slide key={index}>
            <img
              src={item}
              alt={`image-slider-${index}`}
              style={{ transition: `${velocidad}ms ease-out all` }}
              className={` ${index === activeIndex ? "active" : ""}`}
            />
          </Slide>
        ))}
      </Inner>
      {controls && (
        <>
          <ButtonArrow
            onClick={() => updateIndex(activeIndex - 1)}
            style={{ opacity: activeIndex === 0 ? 0 : 1 }}
          >
            Prev
          </ButtonArrow>
          <ButtonArrow
            derecho
            onClick={() => updateIndex(activeIndex + 1)}
            style={{ opacity: activeIndex === array?.length - 1 ? 0 : 1 }}
          >
            Next
          </ButtonArrow>
        </>
      )}
      {array?.length > 1 && (
        <Indicators>
          {array?.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`image-slider-${index}`}
              onClick={() => setActiveIndex(index)}
              className={` ${index === activeIndex ? "active" : ""}`}
              style={{ transition: `${velocidad - 100}ms ease-out all` }}
            />
          ))}
        </Indicators>
      )}
    </CarouselContainer>
  );
};

// 2xrzAYTi
