import { useFlipLink } from "../hook/useFlipLink";

const FlipLink = ({ children, fn, textclass }) => {
  const { mouseEnter, mouseLeave, dimensions, textLayerRef, hovered } = useFlipLink();
  return (
    <button
      onClick={fn}
      className={`flip-link ${textclass}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <div ref={textLayerRef} className={`text-layer ${hovered ? "hovered" : ""}`}>
        {children.split("").map((l, i) => (
          <span className='letter top' key={`top-${i}`} style={{ transitionDelay: `${i * 50}ms` }}>
            {l}
          </span>
        ))}
      </div>
      <div className={`text-layer ${hovered ? "hovered" : ""}`}>
        {children.split("").map((l, i) => (
          <span className='letter bottom' key={`bottom-${i}`} style={{ transitionDelay: `${i * 50}ms` }}>
            {l}
          </span>
        ))}
      </div>
    </button>
  );
};

export default FlipLink;
