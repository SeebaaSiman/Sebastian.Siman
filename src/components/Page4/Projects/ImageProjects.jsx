export const ImageProjects = ({ img, active, rotationPosition, index }) => {
  return (
    <img
      className={`${active && "active"}`}
      style={{
        transform: active
          ? `scale(1.05) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg)`,
        animationDelay: `${index * 0.2}s`,
      }}
      src={img}
      alt="project image"
      loading="lazy"
    />
  );
};
