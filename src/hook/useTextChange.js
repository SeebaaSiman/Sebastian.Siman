import { useState, useEffect } from "react";
import { useLanguage } from "@/language/LanguageContext";

export const useTextChange = () => {

    const { texts } = useLanguage();

    const prefix = `${texts.prefix}`;
    const options = ["Sebastián Siman", `${texts.options}`];

    //Este estado será el index que se usará para options
    const [index, setIndex] = useState(0);
    // Será el sufijo, que se obtiene según el index de options
    const [suffix, setSuffix] = useState(options[index]);

    // es el encargado de actualizar el index del array options cada 2 segundos para que el componente vaya alternando entre las opciones. Se usa setInterval para darle un tiempo (de 2 seg en este caso) y se usa prevIndex para actualizar el valor del index dentro del estado, ya que de esta manera nos aseguramos de que el valor que se esté actualizando sea el más actualizado en ese momento.
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % options.length);
        }, 2500);

        return () => clearInterval(intervalId);
    }, [options.length]);

    //se encarga de actualizar el valor del sufijo (suffix) cada vez que el index o el array options cambien. Esto es necesario ya que el sufijo depende del valor del index, el cual a su vez depende del array de opciones. De esta manera, cada vez que el index o el array cambien, se actualizará el valor del sufijo.
    useEffect(() => {
        setSuffix(options[index]);
    }, [index, options]);

    return { prefix, suffix, }
}
