import { useCustomCursorContext } from "../hook/useContextProvider";
import { useOppositeScroll } from "../hook/useOppositeScroll";

const OppositeScrollColumns = ({ arrLeft, arrRight }) => {
  const {
    containerRef,
    scrollY,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleArrowUp,
    handleArrowDown,
  } = useOppositeScroll();
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();

  return (
    <div
      className='scroll-container'
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      style={{ cursor: "grab" }}
    >
      <button
        className='btn-svg top'
        onClick={handleArrowUp}
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
      >
        <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L18.7071 10.2929C19.0976 10.6834 19.0976 11.3166 18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L13 7.41421V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V7.41421L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L11.2929 4.29289Z'
            fill='#0F1729'
          />
        </svg>
      </button>
      <button
        onMouseEnter={handleCursorXs}
        onMouseLeave={handleCursorSmall}
        className='btn-svg bottom'
        onClick={handleArrowDown}
      >
        <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z'
            fill='#0F1729'
          />
        </svg>
      </button>

      <div
        className='column-left'
        style={{
          transform: `translateY(-${scrollY}px)`,
        }}
      >
        {arrLeft.map((child, index) => (
          <div key={index} className='section'>
            {child}
          </div>
        ))}
      </div>
      <div
        className='column-right'
        style={{
          transform: `translateY(calc(${scrollY}px - 200vh))`,
        }}
      >
        {arrRight.map((child, index) => (
          <div key={index} className='section'>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OppositeScrollColumns;
