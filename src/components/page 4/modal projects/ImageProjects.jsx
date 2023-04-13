export const ImageProjects = ({ url, active, rotationPosition }) => {
  return (
    <img
      className={`${active && "active"}`}
      style={{
        transform: active
          ? `scale(1.1) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg)`,
      }}
      src={url}
    />
  );
};
