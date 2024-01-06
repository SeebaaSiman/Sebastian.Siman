export const ImageProjects = ({ img, active, rotationPosition }) => {
  return (
    <img
      className={`${active && "active"}`}
      style={{
        transform: active
          ? `scale(1.05) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg)`,
      }}
      src={img}
    />
  );
};
