import { useEffect, useState } from "react";
function usePageVisibility(message) {
    const [previousTitle, setPreviousTitle] = useState(document.title);

    useEffect(() => {
        const handleBlur = () => {
            setPreviousTitle(document.title);
            document.title = message;
        };

        const handleFocus = () => {
            document.title = previousTitle;
        };

        window.addEventListener("blur", handleBlur);
        window.addEventListener("focus", handleFocus);

        return () => {
            window.removeEventListener("blur", handleBlur);
            window.removeEventListener("focus", handleFocus);
        };
    }, [message, previousTitle]);

    return { previousTitle };
}

export default usePageVisibility;

// export const App = () => {

//     usePageVisibility("¡No te vayas! ¡Vuelve!");

//     return (
//         <CursorManager>
//             <StyleGlobal />
//             <Loading />
//         </CursorManager>
//     );
// };
