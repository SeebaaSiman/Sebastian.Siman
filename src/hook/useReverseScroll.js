import { useEffect } from "react";

export const useReverseScroll = (containerRef, oppositiveScrollRef) => {

 const handleScroll = () => {
  
  const scrollPosition =
   window.scrollY || window.scrollTop || document.documentElement.scrollTop;
  const containerRec = containerRef.current.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (scrollPosition >= window.innerHeight) {
   const adjustedScrollPosition = scrollPosition - window.innerHeight;
   oppositiveScrollRef.current.style.transform = `translateY(${adjustedScrollPosition * 2
    }px)`;
  } else {
   oppositiveScrollRef.current.style.transform = `translateY(${0}px)`;
  }
  if (containerRec.bottom <= windowHeight) {
   oppositiveScrollRef.current.style.transform = `translateY(${400}vh)`;
  }
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);
}
