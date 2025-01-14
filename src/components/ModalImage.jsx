import { useEffect } from "react";

const ModalImage = ({
  images,
  setIsModalOpen,
  setCurrentImageIndex,
  isModalOpen,
  currentImageIndex,
  handleCursorNotSize,
  handleCursorSmall,
}) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen) {
        if (event.key === "ArrowLeft") {
          handlePrevImage();
        } else if (event.key === "ArrowRight") {
          handleNextImage();
        } else if (event.key === "Escape") {
          handleCloseModal();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className={`modal-overlay ${isModalOpen ? "open" : "close"}`}>
      <div className='modal-slider'>
        <img src={images?.[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
        <button
          onMouseEnter={handleCursorNotSize}
          onMouseLeave={handleCursorSmall}
          className='btn-svg left'
          onClick={handlePrevImage}
        >
          <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3165 19.0976 14.6834 19.0976 14.2929 18.7071L8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L14.2929 5.29289C14.6834 4.90237 15.3165 4.90237 15.7071 5.29289Z'
              fill='#fff'
            />
          </svg>
        </button>
        <button
          onMouseEnter={handleCursorNotSize}
          onMouseLeave={handleCursorSmall}
          className='btn-svg right'
          onClick={handleNextImage}
        >
          <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z'
              fill='#fff'
            />
          </svg>
        </button>
        <button
          onMouseEnter={handleCursorNotSize}
          onMouseLeave={handleCursorSmall}
          className='btn-svg top'
          onClick={handleCloseModal}
        >
          <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z'
              fill='#fff'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalImage;
