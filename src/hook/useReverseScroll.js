import { useEffect } from "react";

export const useReverseScroll = (containerRef, oppositiveScrollRef) => {
  const handleScroll = () => {
    //Obtener la posición actual del scroll (la obtengo de 3 maneras según la compatibilidad del navegador)
    const scrollPosition =
      window.scrollY || window.scrollTop || document.documentElement.scrollTop;
    //almacena la posición y el tamaño del contenedor referenciado en relación con el viewport.
    const containerRec = containerRef.current.getBoundingClientRect();
    //Obtener la altura de la ventana
    const windowHeight = window.innerHeight;

    if (scrollPosition >= window.innerHeight) {
      //Calcular el desplazamiento ajustado restandole 100vh porque está en la segunda página
      const adjustedScrollPosition = scrollPosition - window.innerHeight;
      oppositiveScrollRef.current.style.transform = `translateY(${adjustedScrollPosition * 2
        }px)`;

    } else {
      // se ajusta al top:0;
      oppositiveScrollRef.current.style.transform = `translateY(${0}px)`;
    }
    if (containerRec.bottom <= windowHeight) {
      //se ajusta en bottom 
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
