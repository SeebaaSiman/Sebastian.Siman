import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const ButtonArrow = styled.button`
  position: absolute;
  top: 50%;
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 100;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  ${(props) => (props.derecho ? "right: 2%" : "left: 0")}
`;
export const Inner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  user-select: none;
touch-action: pan-x;
`;
export const Indicators = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 4px;

  img {
    scale: 0.8;
    rotate: 90deg;
    max-height: 100px;
    border-radius: 8px;
    filter: drop-shadow(2px 2px 3px black) grayscale(1);
    object-fit: contain;

    &.active {
      scale: 1;
      rotate: 0deg;
      filter: drop-shadow(2px 2px 3px black) grayscale(0);
    }
  }
`;
export const Slide = styled.div`
    user-select: none;
  width: 100vw;
  overflow: hidden;
  padding: 8px;
  z-index: 10;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    user-select: none;
    pointer-events: none;
    max-height: 220px;
    border-radius: 22px;
    filter: drop-shadow(2px 2px 3px black) grayscale(1);
    object-fit: contain;
    scale: 0.6;
    &.active {
      scale: 1;
      filter: drop-shadow(2px 2px 3px black) grayscale(0);
    }

  }
`;