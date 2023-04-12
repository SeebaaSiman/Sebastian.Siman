import { useState, useEffect } from "react";

export const useOnScreen = (ref, threshold = 0.3) => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry?.isIntersecting ?? false);
            },
            {
                rootMargin: "0px",
                threshold,
            }
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

    return { isIntersecting };
}

// import { useRef } from "react";
// import styled from "styled-components";
// import useOnScreen from "./useOnScreen";

// const AnimatedBox = styled.div`
//   opacity: ${(props) => (props.isVisible ? 1 : 0)};
//   transform: ${(props) =>
//     props.isVisible ? "translateY(0)" : "translateY(50px)"};
//   transition: opacity 0.5s, transform 0.5s;
// `;

// function App() {
//   const ref = useRef();
//   const isVisible = useOnScreen(ref, 0.5);

//   return (
//     <AnimatedBox ref={ref} isVisible={isVisible}>
//       ¡Hola! Soy una caja animada.
//     </AnimatedBox>
//   );
// }
