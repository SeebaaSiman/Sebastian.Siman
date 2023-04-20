import { useEffect } from 'react';

export const useSmoothScroll = (ref) => {
  const smoothScrollHandler = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (ref?.current) {
      ref.current.addEventListener('click', smoothScrollHandler);
    }

    return () => {
      if (ref?.current) {
        ref.current.removeEventListener('click', smoothScrollHandler);
      }
    };
  }, [ref]);
  return { smoothScrollHandler }
};

