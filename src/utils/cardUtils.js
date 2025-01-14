// Constants for card interactions
export const DRAG_THRESHOLD = 150; // Increased from 100 to require more movement
export const ROTATION_FACTOR = 0.15; // Reduced from 0.1 for smoother rotation
export const VERTICAL_DRAG_THRESHOLD = 100; // Threshold for opening modal via downward swipe

export const calculateCardTransform = (currentX, currentY) => {
  const rotation = currentX * ROTATION_FACTOR;
  return `
    perspective(1000px)
    rotateY(${rotation}deg)
    translateX(${currentX}px)
    translateY(${currentY}px) 
  `;
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const getStackedCardStyle = (index) => ({
  zIndex: 1000 - index,
  transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})    rotate(${random(-15, 15)}deg)`,
  transition: "transform 0.3s ease-out", // Smooth animations on reset
});