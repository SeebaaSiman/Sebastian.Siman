import { useEffect, useRef, useState } from "react";

//Lógica del customCursor.jsx , addEventListener para que el nuevo cursor siga al mouse
export const useCustomCursor = () => {

    const secondaryCursor = useRef(null);
    const shadowCursor = useRef(null);
    //*Hacer que se esconda el cursor por inactividad de movimiento del mouse (2 segundos)
    const [isMouseMoving, setIsMouseMoving] = useState(true); //estado toggle si se mueve el mouse
    //position de referencia para luego comparar con la posición actual del mouse y que sean iguales para posicionar el secundary cursor
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    //Para asegurarme que el cursor está renderizado
    const [isCursorRendered, setIsCursorRendered] = useState(false);
    //se actualiza cuando el cursor se ha renderizado
    useEffect(() => {
        setIsCursorRendered(true);
    }, []);

    //*agrega un evento de escucha al documento para detectar la posición del mouse y actualizar la posición del cursor personalizado en consecuencia.
    useEffect(() => {
        if (isCursorRendered) {
            const handleMouseMove = (event) => {
                const { clientX, clientY } = event;
                const mouseX = clientX;
                const mouseY = clientY;

                positionRef.current.mouseX =
                    mouseX - (secondaryCursor.current?.clientWidth || 0) / 2;
                positionRef.current.mouseY =
                    mouseY - (secondaryCursor.current?.clientHeight || 0) / 2;

                setIsMouseMoving(true);
            };

            document.addEventListener("mousemove", handleMouseMove);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, [isCursorRendered]);

    //se llama a una función followMouse que se ejecuta de forma recursiva utilizando requestAnimationFrame para actualizar la posición del cursor personalizado.
    //* Window.requestAnimationFrame() es un método que informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
    // La posición del cursor personalizado se actualiza en función de la posición actual del mouse y su posición anterior. Se utiliza un factor de suavizado para hacer que la transición entre la posición actual y la anterior sea más suave.
    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);

            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;

            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

                if (
                    Math.abs(positionRef.current.distanceX) +
                    Math.abs(positionRef.current.distanceY) < 0.1
                ) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }

            if (secondaryCursor.current) {
                secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
            }
            if (shadowCursor.current) {
                // Centra el shadow respecto al secondaryCursor
                const shadowSize = shadowCursor.current.offsetWidth || 0;
                const secondarySize = secondaryCursor.current?.offsetWidth || 0;
                const offset = (shadowSize - secondarySize) / 2;
                shadowCursor.current.style.transform = `translate3d(${destinationX - offset}px, ${destinationY - offset}px, 0)`;
            }
        };

        followMouse();

        return () => {
            cancelAnimationFrame(positionRef.current.key);
        };
    }, []);



    // se agrega un evento de escucha mousemove que actualiza el estado del isMouseMoving y reinicia un temporizador. Si el temporizador expira, se llama a la función handleMouseIdle, que establece el estado del isMouseMoving en false y oculta el secondary-cursor. El tiempo de espera se establece en 2 segundos
    useEffect(() => {
        let timeoutId;
        const handleMouseIdle = () => {
            setIsMouseMoving(false);
        };
        const handleMouseActive = () => {
            setIsMouseMoving(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleMouseIdle, 3000); // 2 segundos (2000 miliseg)
        };
        document.addEventListener("mousemove", handleMouseActive);
        return () => {
            document.removeEventListener("mousemove", handleMouseActive);

        };
    }, []);
    return { isMouseMoving, secondaryCursor, shadowCursor }
}
