import { useState, useEffect, useRef } from "react";

export const useNavBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const listRef = useRef([]);

    useEffect(() => {
        listRef.current.forEach((item, index) => {
            item.addEventListener("click", () => setActiveIndex(index));
        });
        return () => {
            listRef.current.forEach((item, index) => {
                item.removeEventListener("click", () => setActiveIndex(index));
            });
        };
    }, []);
}